import Taro from '@tarojs/taro';
import { API_BASE_URL, API_TIMEOUT, API_STATUS, HTTP_METHOD, CONTENT_TYPE } from '../constants/api-constants';

// API配置
// 定义支持的HTTP方法类型
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
  url: string;
  method?: HttpMethod;
  data?: any;
  headers?: Record<string, string>;
  timeout?: number;
}

// 响应数据接口
interface ApiResponse<T = any> {
  code: number;
  message: string;
  data?: T;
  [key: string]: any;
}

/**
 * API请求服务类
 * 封装Taro的HTTP请求，提供统一的API调用方式
 */
class ApiService {
  /**
   * 基础请求方法
   * @param options 请求配置
   * @returns Promise<ApiResponse<T>>
   */
  async request<T = any>(options: RequestOptions): Promise<ApiResponse<T>> {
    const { url, method = HTTP_METHOD.GET, data = {}, headers = {}, timeout = API_TIMEOUT } = options;

    try {
      // 显示加载提示
      Taro.showLoading({ title: '加载中...' });

      // 构建请求参数，确保method类型正确
      const requestParams = {
        url: `${API_BASE_URL}${url}`,
        // 类型断言确保与Taro.request兼容
        method: method as 'GET' | 'POST' | 'PUT' | 'DELETE',
        data,
        header: {
          'Content-Type': CONTENT_TYPE.JSON,
          // 添加token等认证信息
          'Authorization': this.getAuthorization(),
          ...headers
        },
        timeout
      };

      // 发送请求
      const response = await Taro.request(requestParams);
      const { statusCode, data: responseData } = response;

      // 检查HTTP状态码
      if (statusCode !== 200) {
        throw new Error(`请求失败: ${statusCode}`);
      }

      // 检查业务状态码
      if (responseData.code !== API_STATUS.SUCCESS) {
        throw new Error(responseData.message || '请求失败');
      }

      return responseData;
    } catch (error) {
      console.error('API请求错误:', error);
      
      // 错误处理
      if (error instanceof Error) {
        Taro.showToast({
          title: error.message,
          icon: 'none'
        });
      }
      
      throw error;
    } finally {
      // 隐藏加载提示
      Taro.hideLoading();
    }
  }

  /**
   * GET请求
   * @param url 请求URL
   * @param params 查询参数
   * @returns Promise<ApiResponse<T>>
   */
  async get<T = any>(url: string, params?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url,
      method: HTTP_METHOD.GET as HttpMethod,
      data: params
    });
  }

  /**
   * POST请求
   * @param url 请求URL
   * @param data 请求数据
   * @returns Promise<ApiResponse<T>>
   */
  async post<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url,
      method: HTTP_METHOD.POST as HttpMethod,
      data
    });
  }

  /**
   * PUT请求
   * @param url 请求URL
   * @param data 请求数据
   * @returns Promise<ApiResponse<T>>
   */
  async put<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url,
      method: HTTP_METHOD.PUT as HttpMethod,
      data
    });
  }

  /**
   * DELETE请求
   * @param url 请求URL
   * @param params 查询参数
   * @returns Promise<ApiResponse<T>>
   */
  async delete<T = any>(url: string, params?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      url,
      method: HTTP_METHOD.DELETE as HttpMethod,
      data: params
    });
  }

  /**
   * 获取认证信息
   * @returns 认证字符串
   */
  private getAuthorization(): string {
    // 从本地存储获取token
    const token = Taro.getStorageSync('token');
    return token ? `Bearer ${token}` : '';
  }

  /**
   * 上传文件
   * @param url 上传地址
   * @param filePath 文件路径
   * @param name 文件名称
   * @param formData 其他表单数据
   * @returns Promise<any>
   */
  async uploadFile(url: string, filePath: string, name: string = 'file', formData?: any): Promise<any> {
    try {
      Taro.showLoading({ title: '上传中...' });
      return new Promise((resolve, reject) => {
        Taro.uploadFile({
          url: `${API_BASE_URL}${url}`,
          filePath,
          name,
          formData,
          header: {
            'Authorization': this.getAuthorization()
          },
          success: (res) => {
            Taro.hideLoading();
            try {
              const parsedData = JSON.parse(res.data);
              resolve(parsedData);
            } catch (e) {
              resolve(res.data);
            }
          },
          fail: (err) => {
            Taro.hideLoading();
            console.error('文件上传错误:', err);
            Taro.showToast({
              title: '上传失败',
              icon: 'none'
            });
            reject(err);
          }
        });
      });
    } catch (error) {
      Taro.hideLoading();
      throw error;
    }
  }

  /**
   * 下载文件
   * @param url 下载地址
   * @param filePath 保存路径
   * @returns Promise<any>
   */
  async downloadFile(url: string, filePath?: string): Promise<any> {
    try {
      Taro.showLoading({ title: '下载中...' });

      const response = await Taro.downloadFile({
        url: `${API_BASE_URL}${url}`,
        filePath,
        header: {
          'Authorization': this.getAuthorization()
        }
      });

      return response;
    } catch (error) {
      console.error('文件下载错误:', error);
      Taro.showToast({
        title: '下载失败',
        icon: 'none'
      });
      throw error;
    } finally {
      Taro.hideLoading();
    }
  }
}

// 导出单例
export default new ApiService();