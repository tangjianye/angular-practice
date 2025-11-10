# 常量定义目录

本目录用于存放项目中所有的常量定义，按功能进行分类。

## 目录结构

```
constants/
├── api-constants.ts    # API相关常量
├── app-constants.ts    # 应用级常量
├── route-constants.ts  # 路由相关常量
└── README.md           # 说明文档
```

## 常量分类

### 1. API相关常量 (api-constants.ts)

定义与API调用相关的常量，包括：
- API基础URL
- 请求超时时间
- 响应状态码
- API端点路径
- 请求方法类型

### 2. 应用级常量 (app-constants.ts)

定义应用程序级别的常量，包括：
- 应用信息（名称、版本等）
- 颜色主题
- 尺寸常量
- 正则表达式
- 错误消息

### 3. 路由相关常量 (route-constants.ts)

定义与页面路由相关的常量，包括：
- 页面路径
- TabBar页面配置
- 路由参数键名
- 导航类型
- 页面标题

## 命名规范

- **文件命名**: 使用 kebab-case，如 `api-constants.ts`
- **常量对象命名**: 使用 PascalCase，如 `API_CONFIG`
- **常量属性命名**: 使用 UPPER_SNAKE_CASE，如 `BASE_URL`

## 开发规范

1. 常量应使用 TypeScript 进行类型定义
2. 相关的常量应组织在同一个对象中
3. 为常量添加必要的文档注释
4. 避免硬编码的魔法数字和字符串
5. 考虑常量的可扩展性

## 常量使用示例

### 导入常量

```ts
import { API_CONFIG, HTTP_STATUS } from '@/constants/api-constants';
import { COLORS, SIZES } from '@/constants/app-constants';
import { PAGE_PATHS } from '@/constants/route-constants';
```

### 使用常量

```ts
// API调用示例
const apiUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USER_INFO}`;

// 样式相关示例
const buttonStyle = { backgroundColor: COLORS.PRIMARY };

// 路由跳转示例
Taro.navigateTo({ url: PAGE_PATHS.USER_PROFILE });
```

## 注意事项

1. 避免在常量文件中引入业务逻辑
2. 不要将可变的配置项放在常量文件中
3. 定期审查常量，移除不再使用的常量
4. 对于可能频繁修改的配置，考虑使用环境变量或配置文件