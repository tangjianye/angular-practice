// API 相关常量定义
import config from '../config/environment';

// API 基础域名
export const API_BASE_URL = config.API_BASE_URL;

// API 请求超时时间（毫秒）
export const API_TIMEOUT = 30000;

// API 响应状态码
export const API_STATUS = {
  SUCCESS: 0,
  ERROR: 1,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

// API 端点路径
export const API_ENDPOINTS = {
  // 用户相关
  USER: {
    LOGIN: '/user/login',
    LOGOUT: '/user/logout',
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile/update',
    SETTINGS: '/user/settings'
  },
  
  // 动态相关
  DYNAMIC: {
    LIST: '/dynamic/list',
    DETAIL: '/dynamic/detail',
    CREATE: '/dynamic/create',
    UPDATE: '/dynamic/update',
    DELETE: '/dynamic/delete',
    LIKE: '/dynamic/like',
    COMMENT: '/dynamic/comment'
  },
  
  // 好友相关
  FRIEND: {
    LIST: '/friend/list',
    REQUEST: '/friend/request',
    ACCEPT: '/friend/accept',
    REJECT: '/friend/reject',
    DELETE: '/friend/delete',
    SEARCH: '/friend/search'
  },
  
  // 消息相关
  MESSAGE: {
    LIST: '/message/list',
    SEND: '/message/send',
    MARK_READ: '/message/read',
    DELETE: '/message/delete',
    UNREAD_COUNT: '/message/unread-count'
  }
};

// 请求方法类型
export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};

// 请求头类型
export const CONTENT_TYPE = {
  JSON: 'application/json',
  FORM: 'application/x-www-form-urlencoded',
  MULTIPART: 'multipart/form-data'
};