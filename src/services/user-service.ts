import { API_ENDPOINTS } from '../constants/api-constants';
import apiService from './api-service';

// 用户信息接口
export interface UserInfo {
  id: string;
  username: string;
  nickname: string;
  avatar?: string;
  email?: string;
  phone?: string;
  gender?: number;
  birthdate?: string;
  createTime?: string;
  updateTime?: string;
  [key: string]: any;
}

// 用户登录参数接口
interface LoginParams {
  username: string;
  password: string;
}

// 用户登录响应接口
interface LoginResponse {
  token: string;
  userInfo: UserInfo;
}

// 用户注册参数接口
interface RegisterParams {
  username: string;
  password: string;
  nickname?: string;
  email?: string;
  phone?: string;
}

// 用户服务类
class UserService {
  /**
   * 用户登录
   * @param params 登录参数
   * @returns Promise<LoginResponse>
   */
  async login(params: LoginParams): Promise<LoginResponse> {
    const response = await apiService.post<LoginResponse>(
      API_ENDPOINTS.USER.LOGIN,
      params
    );
    return response.data!;
  }

  /**
   * 用户注册
   * @param params 注册参数
   * @returns Promise<{ success: boolean }>
   */
  async register(params: RegisterParams): Promise<{ success: boolean }> {
    const response = await apiService.post(
      '/user/register', // 假设的注册端点
      params
    );
    return { success: response.code === 0 };
  }

  /**
   * 获取用户信息
   * @param userId 用户ID
   * @returns Promise<UserInfo>
   */
  async getUserInfo(userId?: string): Promise<UserInfo> {
    const response = await apiService.get<UserInfo>(
      userId ? `${API_ENDPOINTS.USER.PROFILE}/${userId}` : API_ENDPOINTS.USER.PROFILE
    );
    return response.data!;
  }

  /**
   * 更新用户信息
   * @param userInfo 用户信息
   * @returns Promise<UserInfo>
   */
  async updateUserInfo(userInfo: Partial<UserInfo>): Promise<UserInfo> {
    const response = await apiService.put<UserInfo>(
      API_ENDPOINTS.USER.UPDATE_PROFILE,
      userInfo
    );
    return response.data!;
  }

  /**
   * 上传头像
   * @param filePath 头像文件路径
   * @returns Promise<{ avatarUrl: string }>
   */
  async uploadAvatar(filePath: string): Promise<{ avatarUrl: string }> {
    const response = await apiService.uploadFile(
      '/user/upload-avatar', // 假设的上传头像端点
      filePath,
      'avatar'
    );
    return response.data;
  }

  /**
   * 修改密码
   * @param oldPassword 旧密码
   * @param newPassword 新密码
   * @returns Promise<{ success: boolean }>
   */
  async changePassword(oldPassword: string, newPassword: string): Promise<{ success: boolean }> {
    const response = await apiService.put(
      '/user/change-password', // 假设的修改密码端点
      { oldPassword, newPassword }
    );
    return { success: response.code === 0 };
  }

  /**
   * 用户登出
   * @returns Promise<{ success: boolean }>
   */
  async logout(): Promise<{ success: boolean }> {
    const response = await apiService.post(API_ENDPOINTS.USER.LOGOUT);
    return { success: response.code === 0 };
  }

  /**
   * 获取用户列表
   * @param params 查询参数
   * @returns Promise<{ list: UserInfo[], total: number }>
   */
  async getUserList(params: {
    page?: number;
    pageSize?: number;
    keyword?: string;
  }): Promise<{ list: UserInfo[], total: number }> {
    const response = await apiService.get(
      '/user/list', // 假设的用户列表端点
      params
    );
    return response.data!;
  }
}

// 导出单例
export default new UserService();