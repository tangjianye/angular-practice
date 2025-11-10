# API服务目录

本目录用于存放项目中的API服务相关文件，包括基础API服务和业务API服务。

## 目录结构

```
services/
├── api-service.ts    # 基础API服务
├── user-service.ts   # 用户相关API服务
├── README.md         # 说明文档
```

## 服务分类

### 1. 基础API服务 (api-service.ts)

提供统一的HTTP请求封装，处理通用的请求配置、错误处理、认证等功能。

### 2. 业务API服务 (xxx-service.ts)

根据业务模块拆分的API服务，每个服务对应一个业务领域，如用户服务、消息服务等。

## 命名规范

- **文件命名**: 使用 kebab-case，如 `api-service.ts`
- **服务类命名**: 使用 PascalCase，如 `ApiService`
- **方法命名**: 使用 camelCase，如 `getUserInfo()`

## 开发规范

1. 所有服务应使用 TypeScript 开发
2. 基础API服务应提供统一的请求处理、错误处理机制
3. 业务API服务应按功能模块拆分
4. 服务方法应返回 Promise
5. 使用泛型支持不同类型的响应数据
6. 为服务方法添加必要的文档注释
7. 避免在服务中引入过多的业务逻辑

## 服务使用示例

### 导入服务

```ts
import apiService from '@/services/api-service';
import userService from '@/services/user-service';
```

### 使用服务

```ts
// 使用基础API服务
const response = await apiService.get('/user/info', { userId: 123 });

// 使用业务API服务
const userInfo = await userService.getUserInfo(123);
```

## 注意事项

1. 所有API调用都应通过服务层，避免直接在组件或页面中使用Taro.request
2. API服务应负责处理网络错误、业务错误等异常情况
3. 敏感信息（如token）的处理应在基础服务中统一管理
4. 考虑添加请求缓存机制提高性能
5. 定期审查API服务，确保与后端API保持同步