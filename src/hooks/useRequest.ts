import { useState, useEffect, useCallback, useRef } from 'react';

// 请求参数类型
type RequestParams = any[];

// 加载状态类型
type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// 可选配置接口
interface UseRequestOptions<T> {
  // 是否自动执行请求
  autoRun?: boolean;
  // 初始数据
  initialData?: T;
  // 请求成功回调
  onSuccess?: (data: T) => void;
  // 请求失败回调
  onError?: (error: Error) => void;
  // 请求完成回调
  onFinally?: () => void;
  // 防抖延迟（毫秒）
  debounceDelay?: number;
}

/**
 * 通用请求Hook
 * 用于处理异步请求的状态管理和副作用
 */
function useRequest<T>(
  // 请求函数，接收任意参数，返回Promise
  requestFn: (...args: RequestParams) => Promise<T>,
  // 默认请求参数
  defaultParams: RequestParams = [],
  // 配置选项
  options: UseRequestOptions<T> = {}
) {
  // 解构配置项，设置默认值
  const {
    autoRun = true,
    initialData,
    onSuccess,
    onError,
    onFinally,
    debounceDelay = 0
  } = options;

  // 状态定义
  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<Error | null>(null);
  const [params, setParams] = useState<RequestParams>(defaultParams);

  // 防抖定时器引用
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  // 最新请求标识，用于处理请求竞态问题
  const latestRequestRef = useRef<number>(0);

  // 执行请求的核心函数
  const executeRequest = useCallback(
    async (newParams: RequestParams = params) => {
      // 生成新的请求标识
      const requestId = Date.now();
      latestRequestRef.current = requestId;

      try {
        // 设置加载状态
        setLoading('loading');
        setError(null);

        // 执行请求函数
        const result = await requestFn(...newParams);

        // 检查是否是最新的请求，避免竞态问题
        if (latestRequestRef.current === requestId) {
          // 更新数据
          setData(result);
          setLoading('success');

          // 执行成功回调
          if (onSuccess) {
            onSuccess(result);
          }
        }

        return result;
      } catch (err) {
        // 检查是否是最新的请求
        if (latestRequestRef.current === requestId) {
          const errorInstance = err instanceof Error ? err : new Error(String(err));
          setError(errorInstance);
          setLoading('error');

          // 执行失败回调
          if (onError) {
            onError(errorInstance);
          }
        }

        throw err;
      } finally {
        // 检查是否是最新的请求
        if (latestRequestRef.current === requestId) {
          // 执行完成回调
          if (onFinally) {
            onFinally();
          }
        }
      }
    },
    [requestFn, onSuccess, onError, onFinally, params]
  );

  // 带防抖的请求函数
  const debouncedExecute = useCallback(
    (newParams: RequestParams = params) => {
      if (debounceDelay > 0) {
        // 清除之前的定时器
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }

        // 设置新的定时器
        debounceTimerRef.current = setTimeout(() => {
          executeRequest(newParams);
        }, debounceDelay);
      } else {
        // 没有防抖，直接执行
        executeRequest(newParams);
      }
    },
    [executeRequest, params, debounceDelay]
  );

  // 重新执行请求
  const refresh = useCallback(() => {
    debouncedExecute(params);
  }, [debouncedExecute, params]);

  // 更新参数并执行请求
  const run = useCallback(
    (newParams: RequestParams) => {
      setParams(newParams);
      debouncedExecute(newParams);
    },
    [debouncedExecute]
  );

  // 取消请求（通过更新请求标识实现）
  const cancel = useCallback(() => {
    latestRequestRef.current = 0;
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
  }, []);

  // 重置状态
  const reset = useCallback(() => {
    setData(initialData);
    setLoading('idle');
    setError(null);
    setParams(defaultParams);
    cancel();
  }, [initialData, defaultParams, cancel]);

  // 自动执行请求
  useEffect(() => {
    if (autoRun && (loading === 'idle' || params !== defaultParams)) {
      debouncedExecute(params);
    }

    // 组件卸载时清理定时器
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [autoRun, loading, params, defaultParams, debouncedExecute]);

  return {
    data,
    loading,
    error,
    params,
    run,
    refresh,
    cancel,
    reset
  };
}

export default useRequest;