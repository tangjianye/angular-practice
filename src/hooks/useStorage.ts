import { useState, useEffect, useCallback, useRef } from 'react';
import Taro from '@tarojs/taro';

/**
 * 本地存储Hook
 * 提供类似React状态的本地存储管理，自动同步数据到存储中
 * @param key 存储键名
 * @param initialValue 初始值
 * @param storageType 存储类型：'local' | 'session'
 * @returns [value, setValue, removeValue]
 */
function useStorage<T>(
  key: string,
  initialValue: T,
  storageType: 'local' | 'session' = 'local'
): [T, (value: T | ((prevValue: T) => T)) => void, () => void] {
  // 存储引用，用于检测组件卸载
  const isMountedRef = useRef(true);

  // 初始化状态
  const [value, setValue] = useState<T>(() => {
    try {
      // 尝试从存储中获取值
      const item = storageType === 'local' 
        ? Taro.getStorageSync(key)
        : Taro.getStorageSync(key); // 小程序中只有本地存储，这里统一使用getStorageSync
      
      // 如果存储中有值则返回，否则返回初始值
      return item !== undefined ? (item as T) : initialValue;
    } catch (error) {
      console.error(`Error reading ${storageType} storage key "${key}":`, error);
      return initialValue;
    }
  });

  // 组件卸载时设置标志
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // 设置值的函数
  const setStoredValue = useCallback(
    (valueOrFn: T | ((prevValue: T) => T)) => {
      try {
        // 计算新值
        const newValue = valueOrFn instanceof Function 
          ? valueOrFn(value)
          : valueOrFn;

        // 更新状态
        if (isMountedRef.current) {
          setValue(newValue);
        }

        // 保存到存储
        if (newValue === undefined) {
          Taro.removeStorageSync(key);
        } else {
          Taro.setStorageSync(key, newValue);
        }
      } catch (error) {
        console.error(`Error setting ${storageType} storage key "${key}":`, error);
      }
    },
    [key, value, storageType]
  );

  // 移除值的函数
  const removeValue = useCallback(() => {
    try {
      // 更新状态
      if (isMountedRef.current) {
        setValue(initialValue);
      }
      // 从存储中移除
      Taro.removeStorageSync(key);
    } catch (error) {
      console.error(`Error removing ${storageType} storage key "${key}":`, error);
    }
  }, [key, initialValue, storageType]);

  // 监听存储变化（跨页面更新）
  useEffect(() => {
    // 在小程序中，我们可以使用事件监听来处理存储变化
    // 这里仅作为示例，实际项目中可能需要根据具体需求实现
    const handleStorageChange = (res: any) => {
      if (res.key === key && isMountedRef.current) {
        setValue(res.newValue !== undefined ? res.newValue : initialValue);
      }
    };

    // 注意：小程序不直接支持storage事件监听
    // 这里的代码仅作为示例，实际实现可能需要其他方式
    
    return () => {
      // 清理函数
    };
  }, [key, initialValue]);

  return [value, setStoredValue, removeValue];
}

export default useStorage;