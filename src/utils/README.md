# 工具函数目录

本目录用于存放项目中所有的工具函数，按功能进行分类。

## 目录结构

```
utils/
├── date-utils.ts      # 日期处理工具
├── format-utils.ts    # 格式化工具
├── storage-utils.ts   # 存储工具
└── README.md          # 说明文档
```

## 工具函数分类

### 1. 日期处理工具 (date-utils.ts)

提供日期格式化、日期比较、相对时间计算等功能。

### 2. 格式化工具 (format-utils.ts)

提供数字格式化、货币格式化、手机号格式化、文件大小格式化、字符串截断等功能。

### 3. 存储工具 (storage-utils.ts)

封装小程序的本地存储操作，提供统一的存储API。

## 命名规范

- **文件命名**: 使用 kebab-case，如 `date-utils.ts`
- **函数命名**: 使用 camelCase，如 `formatDate()`
- **常量命名**: 使用 UPPER_SNAKE_CASE，如 `STORAGE_KEYS`

## 开发规范

1. 工具函数应具有单一职责
2. 所有函数必须有明确的类型定义
3. 提供合理的默认参数
4. 处理边界情况和错误
5. 添加必要的文档注释
6. 避免在工具函数中引入过多的外部依赖
7. 考虑性能优化，避免不必要的计算

## 工具函数使用示例

### 导入工具函数

```ts
import { formatDate, getRelativeTime } from '@/utils/date-utils';
```

### 使用工具函数

```ts
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
const relativeTime = getRelativeTime(new Date('2024-01-01'));
```

## 注意事项

1. 避免创建重复的工具函数
2. 对于复杂的逻辑，考虑拆分为更小的函数
3. 工具函数应保持纯函数的特性，避免副作用
4. 定期审查和优化工具函数
5. 为新添加的工具函数编写单元测试