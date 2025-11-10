import React from 'react';
import { View, Image, Text, Button } from '@tarojs/components';
import { observer } from 'mobx-react';
import Taro from '@tarojs/taro';
import './index.scss';

// 导入userStore，统一使用store中的UserInfo类型
import userStore from "../../store/user";

// 菜单项接口
export interface MenuItem {
  id: string;
  title: string;
  icon?: string;
}

/**
 * 个人页面组件
 * 展示用户信息和功能菜单入口
 */
const ProfilePage: React.FC = observer(() => {
  // 功能菜单数据
  const menuItems: MenuItem[] = [
    { id: 'settings', title: '设置' },
    { id: 'help', title: '帮助中心' },
    { id: 'about', title: '关于我们' }
  ];

  /**
   * 处理菜单点击事件
   * @param menuId 菜单ID
   */
  const handleMenuClick = (menuId: string): void => {
    const menu = menuItems.find((item) => item.id === menuId);
    if (menu) {
      Taro.showToast({
        title: `点击了${menu.title}`,
        icon: 'none',
        duration: 1500
      });
    }
  };

  /**
   * 处理退出登录
   */
  const handleLogout = (): void => {
    Taro.showModal({
      title: '确认退出',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          userStore.logout();
          Taro.showToast({
            title: '已退出登录',
            icon: 'success',
            duration: 1500
          });
        }
      }
    });
  };

  return (
    <View className='profile-page'>
      {/* 用户信息区域 */}
      <View className='user-info-section'>
        <Image
          className='user-avatar'
          src={userStore.userInfo.avatar}
          mode='aspectFill'
        />
        <View className='user-details'>
          <Text className='user-nickname'>{userStore.userInfo.nickname}</Text>
          <Text className='user-signature'>{userStore.userInfo.signature}</Text>
        </View>
      </View>

      {/* 功能菜单区域 */}
      <View className='menu-section'>
        {menuItems.map((item) => (
          <View
            key={item.id}
            className='menu-item'
            onClick={() => handleMenuClick(item.id)}
          >
            <Text className='menu-title'>{item.title}</Text>
            <Text className='menu-arrow'>›</Text>
          </View>
        ))}
      </View>

      {/* 退出登录按钮 */}
      <View className='logout-section'>
        <Button className='logout-button' onClick={handleLogout}>
          退出登录
        </Button>
      </View>
    </View>
  );
});

// 导出组件
export default ProfilePage;
