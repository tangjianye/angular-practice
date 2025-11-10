// 路由相关常量定义

// 页面路径
export const PAGE_PATHS = {
  // 主要页面
  HOME: '/pages/index/index',
  DYNAMIC: '/pages/dynamic/index',
  FRIENDS: '/pages/friends/index',
  MESSAGE: '/pages/message/index',
  PROFILE: '/pages/profile/index',
  
  // 动态相关页面
  DYNAMIC_DETAIL: '/pages/dynamic/detail',
  DYNAMIC_CREATE: '/pages/dynamic/create',
  DYNAMIC_EDIT: '/pages/dynamic/edit',
  
  // 好友相关页面
  FRIEND_DETAIL: '/pages/friend/detail',
  FRIEND_SEARCH: '/pages/friend/search',
  FRIEND_REQUESTS: '/pages/friend/requests',
  
  // 消息相关页面
  CHAT_ROOM: '/pages/message/chat',
  MESSAGE_SETTINGS: '/pages/message/settings',
  
  // 用户相关页面
  USER_EDIT: '/pages/profile/edit',
  USER_SETTINGS: '/pages/profile/settings',
  USER_COLLECTION: '/pages/profile/collection',
  USER_FAVORITES: '/pages/profile/favorites',
  
  // 通用页面
  LOGIN: '/pages/common/login',
  REGISTER: '/pages/common/register',
  FORGOT_PASSWORD: '/pages/common/forgot-password',
  SEARCH: '/pages/common/search',
  NOTIFICATION: '/pages/common/notification',
  ABOUT: '/pages/common/about',
  PRIVACY_POLICY: '/pages/common/privacy-policy',
  TERMS_OF_SERVICE: '/pages/common/terms-of-service'
};

// TabBar配置
export const TAB_BAR_PAGES = [
  PAGE_PATHS.HOME,
  PAGE_PATHS.DYNAMIC,
  PAGE_PATHS.FRIENDS,
  PAGE_PATHS.MESSAGE,
  PAGE_PATHS.PROFILE
];

// 路由参数键名
export const ROUTE_PARAMS = {
  ID: 'id',
  USER_ID: 'userId',
  DYNAMIC_ID: 'dynamicId',
  FRIEND_ID: 'friendId',
  MESSAGE_ID: 'messageId',
  TYPE: 'type',
  SOURCE: 'source',
  FROM_PAGE: 'fromPage',
  TO_PAGE: 'toPage',
  QUERY: 'query'
};

// 导航类型
export const NAVIGATION_TYPE = {
  PUSH: 'push',
  REPLACE: 'replace',
  BACK: 'back',
  SWITCH_TAB: 'switchTab',
  RE_LAUNCH: 'reLaunch'
};

// 页面标题
export const PAGE_TITLES = {
  [PAGE_PATHS.HOME]: '首页',
  [PAGE_PATHS.DYNAMIC]: '动态',
  [PAGE_PATHS.FRIENDS]: '好友',
  [PAGE_PATHS.MESSAGE]: '消息',
  [PAGE_PATHS.PROFILE]: '我的',
  [PAGE_PATHS.DYNAMIC_DETAIL]: '动态详情',
  [PAGE_PATHS.DYNAMIC_CREATE]: '发布动态',
  [PAGE_PATHS.DYNAMIC_EDIT]: '编辑动态',
  [PAGE_PATHS.FRIEND_DETAIL]: '好友详情',
  [PAGE_PATHS.FRIEND_SEARCH]: '搜索好友',
  [PAGE_PATHS.FRIEND_REQUESTS]: '好友请求',
  [PAGE_PATHS.CHAT_ROOM]: '聊天',
  [PAGE_PATHS.MESSAGE_SETTINGS]: '消息设置',
  [PAGE_PATHS.USER_EDIT]: '编辑资料',
  [PAGE_PATHS.USER_SETTINGS]: '设置',
  [PAGE_PATHS.USER_COLLECTION]: '我的收藏',
  [PAGE_PATHS.USER_FAVORITES]: '我的喜欢',
  [PAGE_PATHS.LOGIN]: '登录',
  [PAGE_PATHS.REGISTER]: '注册',
  [PAGE_PATHS.FORGOT_PASSWORD]: '忘记密码',
  [PAGE_PATHS.SEARCH]: '搜索',
  [PAGE_PATHS.NOTIFICATION]: '通知',
  [PAGE_PATHS.ABOUT]: '关于我们',
  [PAGE_PATHS.PRIVACY_POLICY]: '隐私政策',
  [PAGE_PATHS.TERMS_OF_SERVICE]: '服务条款'
};