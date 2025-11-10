# Taro 微信小程序项目

这是一个基于 Taro 框架开发的微信小程序项目，采用 React18 + TypeScript + MobX 技术栈。

## 项目结构

```
src/
├── app.config.ts        # 应用配置文件
├── app.scss             # 全局样式文件
├── app.tsx              # 应用入口文件
├── assets/              # 静态资源目录
│   ├── images/          # 图片资源
│   └── tabbar/          # TabBar图标
├── components/          # 组件目录
│   ├── common/          # 通用基础组件
│   ├── business/        # 业务组件
│   └── layout/          # 布局组件
├── constants/           # 常量定义目录
│   ├── api-constants.ts # API相关常量
│   ├── app-constants.ts # 应用级常量
│   └── route-constants.ts # 路由相关常量
├── hooks/               # 自定义Hooks
├── pages/               # 页面目录
│   ├── dynamic/         # 动态页面
│   ├── friends/         # 好友页面
│   ├── index/           # 首页
│   ├── message/         # 消息页面
│   └── profile/         # 个人中心页面
├── services/            # API服务目录
├── store/               # 状态管理目录
│   ├── counter.ts       # 计数器状态
│   └── user.ts          # 用户状态
├── styles/              # 全局样式文件
└── utils/               # 工具函数目录
    ├── date-utils.ts    # 日期处理工具
    ├── format-utils.ts  # 格式化工具
    └── storage-utils.ts # 存储工具
```

## 技术栈

- **框架**: Taro 4.x
- **前端框架**: React 18
- **语言**: TypeScript
- **状态管理**: MobX
- **样式预处理器**: SCSS

## 开发规范

### 命名规范

- **组件文件**: 使用 PascalCase，如 `Button.tsx`
- **工具函数文件**: 使用 kebab-case，如 `date-utils.ts`
- **常量文件**: 使用 kebab-case，如 `api-constants.ts`
- **变量和函数**: 使用 camelCase
- **常量**: 使用 UPPER_SNAKE_CASE

### 组件开发

- 所有组件使用函数组件
- 使用 TypeScript 进行类型定义
- 组件样式使用独立的 SCSS 文件
- 组件目录结构：`components/组件类型/组件名/index.tsx` 和 `style.scss`

### 页面开发

- 页面内容尽量简单，复杂UI使用组件化实现
- 页面配置放在对应的 `index.config.ts` 文件中
- 页面样式放在对应的 `index.scss` 文件中

## 命令说明

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
# 微信小程序开发模式
npm run dev:weapp

# H5开发模式
npm run dev:h5
```

### 构建

```bash
# 构建微信小程序
npm run build:weapp

# 构建H5
npm run build:h5
```

## 项目特点

1. **模块化架构**: 清晰的目录结构，便于维护和扩展
2. **组件化开发**: 丰富的基础组件库，提高开发效率
3. **类型安全**: 完整的 TypeScript 类型定义
4. **状态管理**: 使用 MobX 进行高效的状态管理
5. **工具函数**: 常用工具函数封装，避免重复开发
6. **常量管理**: 集中管理API、路由、应用常量

## 注意事项

1. 请使用 TypeScript 进行开发，确保类型安全
2. 组件设计应遵循单一职责原则
3. 避免在页面中编写过多业务逻辑，应抽离到 services 或 hooks 中
4. 图片资源统一放在 assets/images 目录下
5. 开发前请先阅读相关文档和规范