import React from 'react';
import { View, Image, Text, Button } from '@tarojs/components';
import { observer, inject } from 'mobx-react';
import Taro from '@tarojs/taro';
import './index.scss';

// 引入类型定义
interface StoreType {
  userStore: {
    userInfo: {
      avatar: string;
      nickname: string;
      signature: string;
    };
    logout: () => void;
  };
}

// 菜单项接口
interface MenuItem {
  id: string;
  title: string;
  icon?: string;
}

/**
 * 个人页面
 * 展示用户信息和功能菜单入口
 */
const ProfilePage: React.FC = inject('store')(observer(({ store }: { store: StoreType }) => {
  const { userInfo, logout } = store.userStore;
  
  // 功能菜单数据
  const menuItems: MenuItem[] = [
    { id: 'settings', title: '设置' },
    { id: 'help', title: '帮助中心' },
    { id: 'about', title: '关于我们' }
  ];
  
  // 处理菜单点击事件
  const handleMenuClick = (menuId: string) => {
    Taro.showToast({
      title: `点击了${menuItems.find(item => item.id === menuId)?.title}`,
      icon: 'none'
    });
  };
  
  // 处理退出登录
  const handleLogout = () => {
    Taro.showModal({
      title: '确认退出',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          logout();
          Taro.showToast({ title: '已退出登录' });
        }
      }
    });
  };
  
  return (
    <View className="profile-page">
      {/* 用户信息区域 */}
      <View className="user-info-section">
        <Image 
          className="user-avatar" 
          src={userInfo.avatar} 
          mode="aspectFill" 
        />
        <View className="user-details">
          <Text className="user-nickname">{userInfo.nickname}</Text>
          <Text className="user-signature">{userInfo.signature}</Text>
        </View>
      </View>
      
      {/* 功能菜单区域 */}
      <View className="menu-section">
        {menuItems.map((item) => (
          <View 
            key={item.id} 
            className="menu-item" 
            onClick={() => handleMenuClick(item.id)}
          >
            <Text className="menu-title">{item.title}</Text>
            <Text className="menu-arrow">›</Text>
          </View>
        ))}
      </View>
      
      {/* 退出登录按钮 */}
      <View className="logout-section">
        <Button 
          className="logout-button" 
          onClick={handleLogout}
        >
          退出登录
        </Button>
      </View>
    </View>
  );
}));

export default ProfilePage;