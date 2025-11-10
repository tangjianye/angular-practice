// 环境配置文件
// 根据不同环境导出相应的配置

// 环境类型定义
export type Environment = 'development' | 'testing' | 'production';

// 基础配置
const baseConfig = {
  // 应用名称
  APP_NAME: 'Taro小程序',
  // 应用版本
  APP_VERSION: '1.0.0',
  // 是否开启调试模式
  DEBUG: process.env.NODE_ENV !== 'production',
};

// 开发环境配置
const developmentConfig = {
  ...baseConfig,
  // API基础URL
  API_BASE_URL: 'https://api-dev.example.com',
  // WebSocket URL
  WS_URL: 'wss://ws-dev.example.com',
  // 环境标识
  ENVIRONMENT: 'development' as Environment,
  // 是否启用Mock数据
  ENABLE_MOCK: true,
};

// 测试环境配置
const testingConfig = {
  ...baseConfig,
  // API基础URL
  API_BASE_URL: 'https://api-test.example.com',
  // WebSocket URL
  WS_URL: 'wss://ws-test.example.com',
  // 环境标识
  ENVIRONMENT: 'testing' as Environment,
  // 是否启用Mock数据
  ENABLE_MOCK: false,
};

// 生产环境配置
const productionConfig = {
  ...baseConfig,
  // API基础URL
  API_BASE_URL: 'https://api.example.com',
  // WebSocket URL
  WS_URL: 'wss://ws.example.com',
  // 环境标识
  ENVIRONMENT: 'production' as Environment,
  // 是否启用Mock数据
  ENABLE_MOCK: false,
};

// 根据环境选择配置
const getConfig = () => {
  const env = process.env.NODE_ENV;
  
  switch (env) {
    case 'production':
      return productionConfig;
    case 'testing':
    case 'test':
      return testingConfig;
    case 'development':
    default:
      return developmentConfig;
  }
};

// 导出配置
const config = getConfig();

export default config;