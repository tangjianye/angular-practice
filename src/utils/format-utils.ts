// 数据格式化工具函数

/**
 * 格式化数字为千分位显示
 * @param num 要格式化的数字
 * @returns 格式化后的字符串
 */
export const formatNumber = (num: number | string): string => {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * 格式化金额显示
 * @param amount 金额
 * @param prefix 货币前缀，默认为 '¥'
 * @returns 格式化后的金额字符串
 */
export const formatCurrency = (amount: number | string, prefix: string = '¥'): string => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (Number.isNaN(num)) return `${prefix}0.00`;
  
  return `${prefix}${num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

/**
 * 格式化手机号，隐藏中间4位
 * @param phone 手机号
 * @returns 格式化后的手机号
 */
export const formatPhone = (phone: string): string => {
  if (!phone || phone.length !== 11) return phone;
  return `${phone.slice(0, 3)}****${phone.slice(7)}`;
};

/**
 * 格式化文件大小
 * @param bytes 字节数
 * @returns 格式化后的大小字符串
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * 截取字符串，超出部分显示省略号
 * @param str 原始字符串
 * @param maxLength 最大长度
 * @returns 处理后的字符串
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};