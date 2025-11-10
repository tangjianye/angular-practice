// 应用级别常量定义

// 应用信息
export const APP_INFO = {
  NAME: 'MyApp',
  VERSION: '1.0.0',
  DESCRIPTION: '微信小程序示例应用'
};

// 颜色主题
export const COLORS = {
  // 主色调
  PRIMARY: '#1AAD19',
  PRIMARY_DARK: '#138A0F',
  PRIMARY_LIGHT: '#36CFC9',
  
  // 辅助色
  SECONDARY: '#1890FF',
  WARNING: '#FAAD14',
  DANGER: '#F5222D',
  SUCCESS: '#52C41A',
  INFO: '#1890FF',
  
  // 中性色
  TEXT_PRIMARY: '#333333',
  TEXT_SECONDARY: '#666666',
  TEXT_DISABLED: '#999999',
  TEXT_PLACEHOLDER: '#C9C9C9',
  
  // 背景色
  BG_PRIMARY: '#FFFFFF',
  BG_SECONDARY: '#F5F5F5',
  BG_TERTIARY: '#FAFAFA',
  
  // 边框色
  BORDER: '#E8E8E8',
  BORDER_LIGHT: '#F0F0F0',
  
  // 状态色
  ACTIVE: '#1AAD19',
  INACTIVE: '#999999'
};

// 尺寸常量
export const SIZES = {
  // 间距
  PADDING_XS: 4,
  PADDING_SM: 8,
  PADDING_MD: 16,
  PADDING_LG: 24,
  PADDING_XL: 32,
  
  // 边距
  MARGIN_XS: 4,
  MARGIN_SM: 8,
  MARGIN_MD: 16,
  MARGIN_LG: 24,
  MARGIN_XL: 32,
  
  // 圆角
  RADIUS_SM: 2,
  RADIUS_MD: 4,
  RADIUS_LG: 8,
  RADIUS_XL: 16,
  RADIUS_FULL: 9999,
  
  // 字体大小
  FONT_XS: 10,
  FONT_SM: 12,
  FONT_MD: 14,
  FONT_LG: 16,
  FONT_XL: 18,
  FONT_XXL: 24,
  
  // 图标大小
  ICON_SM: 16,
  ICON_MD: 24,
  ICON_LG: 32,
  ICON_XL: 48,
  
  // TabBar高度
  TAB_BAR_HEIGHT: 50,
  
  // 导航栏高度
  NAV_BAR_HEIGHT: 44
};

// 正则表达式
export const REGEX = {
  PHONE: /^1[3-9]\d{9}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  ID_CARD: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  BANK_CARD: /^\d{16,19}$/,
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
};

// 存储键名前缀
export const STORAGE_PREFIX = 'my_app_';

// 分页配置
export const PAGINATION = {
  PAGE_SIZE: 10,
  INITIAL_PAGE: 1
};

// 动画持续时间（毫秒）
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
};