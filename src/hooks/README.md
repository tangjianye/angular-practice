# 自定义Hooks目录

本目录用于存放项目中所有的自定义Hooks，用于复用React状态逻辑。

## 目录结构

```
hooks/
├── useRequest.ts     # 网络请求Hook
├── useStorage.ts     # 本地存储Hook
└── README.md         # 说明文档
```

## Hook分类

### 1. 网络请求Hook (useRequest.ts)

封装网络请求相关的状态管理和副作用处理，提供统一的请求状态、错误处理、加载状态等。

### 2. 本地存储Hook (useStorage.ts)

封装本地存储相关的操作，提供类似React状态的本地存储管理。

## 命名规范

- **文件命名**: 使用 kebab-case，如 `use-request.ts`
- **Hook函数命名**: 使用 useCamelCase，如 `useRequest()`

## 开发规范

1. 所有Hook必须遵循React Hook的规则
2. 使用TypeScript进行类型定义
3. 保持Hook的单一职责
4. 提供合理的默认值
5. 处理边界情况
6. 添加必要的文档注释
7. 避免在Hook中引入过多的外部依赖

## Hook使用示例

### 导入Hook

```tsx
import useRequest from '@/hooks/useRequest';
import useStorage from '@/hooks/useStorage';
```

### 使用Hook

```tsx
// 使用useRequest
const { data, loading, error, run } = useRequest(fetchUserInfo, [userId], {
  autoRun: true,
  onSuccess: (data) => console.log('获取用户信息成功', data)
});

// 使用useStorage
const [token, setToken, removeToken] = useStorage('token');
```

## 注意事项

1. 自定义Hook的命名必须以`use`开头
2. 避免在Hook中使用副作用过大的操作
3. 对于复杂的状态逻辑，考虑拆分为多个简单的Hook
4. 注意Hook的依赖项，避免不必要的重新渲染
5. 定期审查和优化Hook的性能