import { observable } from 'mobx';

// 用户信息接口定义
interface UserInfo {
  avatar: string;
  nickname: string;
  signature: string;
}

// 用户状态管理store
const userStore = observable({
  // 用户信息，初始使用默认值
  userInfo: {
    avatar: '/assets/images/placeholder.svg',
    nickname: '用户昵称',
    signature: '这个人很懒，什么都没有留下...'
  } as UserInfo,

  // 是否登录状态
  isLoggedIn: true,

  // 设置用户信息
  setUserInfo(info: UserInfo) {
    this.userInfo = { ...info };
  },

  // 更新单个用户信息字段
  updateUserInfoField(field: keyof UserInfo, value: string) {
    this.userInfo[field] = value;
  },

  // 退出登录
  logout() {
    this.isLoggedIn = false;
    // 重置为默认用户信息
    this.userInfo = {
      avatar: 'assets/images/placeholder.svg',
      nickname: '游客',
      signature: '这个人很懒，什么都没有留下...'
    };
  }
});

export default userStore;
