// 本地存储工具函数
import Taro from '@tarojs/taro';

/**
 * 存储数据到本地
 * @param key 存储键名
 * @param value 存储值
 * @param expireTime 过期时间（毫秒），可选
 */
export const setStorage = async (key: string, value: any, expireTime?: number): Promise<void> => {
  try {
    const data = {
      value,
      expire: expireTime ? Date.now() + expireTime : null
    };
    await Taro.setStorage({ key, data: JSON.stringify(data) });
  } catch (error) {
    console.error('存储数据失败:', error);
  }
};

/**
 * 从本地获取数据
 * @param key 存储键名
 * @returns 存储的数据，如果过期或不存在则返回null
 */
export const getStorage = async (key: string): Promise<any> => {
  try {
    const res = await Taro.getStorage({ key });
    if (!res || !res.data) return null;
    
    const parsedData = JSON.parse(res.data);
    
    // 检查是否过期
    if (parsedData.expire && Date.now() > parsedData.expire) {
      await Taro.removeStorage({ key });
      return null;
    }
    
    return parsedData.value;
  } catch (error) {
    console.error('获取数据失败:', error);
    return null;
  }
};

/**
 * 从本地移除数据
 * @param key 存储键名
 */
export const removeStorage = async (key: string): Promise<void> => {
  try {
    await Taro.removeStorage({ key });
  } catch (error) {
    console.error('移除数据失败:', error);
  }
};

/**
 * 清除所有本地存储
 */
export const clearStorage = async (): Promise<void> => {
  try {
    await Taro.clearStorage();
  } catch (error) {
    console.error('清除存储失败:', error);
  }
};

/**
 * 检查键是否存在
 * @param key 存储键名
 * @returns 是否存在
 */
export const hasStorage = async (key: string): Promise<boolean> => {
  try {
    const info = await Taro.getStorageInfo();
    // 根据Taro API，返回值中包含keys数组
    return Array.isArray(info.keys) && info.keys.includes(key);
  } catch (error) {
    console.error('检查键是否存在失败:', error);
    return false;
  }
};

// 预定义的存储键名
export const StorageKeys = {
  USER_INFO: 'user_info',
  TOKEN: 'auth_token',
  SETTINGS: 'app_settings',
  SEARCH_HISTORY: 'search_history'
};