import React from 'react';
import { View, Text, Image, StyleSheet } from '@tarojs/components';
import './index.scss';

// 占位图常量
const PLACEHOLDER_IMAGE = 'https://xcimg.szwego.com/miniapp_add_customer_fail.jpg';

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  badge?: string;
}

const ProfilePage: React.FC = () => {
  // 用户信息
  const userInfo = {
    name: '用户名',
    avatar: PLACEHOLDER_IMAGE,
    level: 'Lv.3',
    followers: 128,
    following: 56
  };

  // 功能菜单
  const menuSections: { title?: string; items: MenuItem[] }[] = [
    {
      items: [
        { id: 'posts', title: '我的动态', icon: '📝' },
        { id: 'favorites', title: '我的收藏', icon: '⭐' },
        { id: 'history', title: '浏览历史', icon: '🕒' }
      ]
    },
    {
      title: '设置与隐私',
      items: [
        { id: 'settings', title: '设置', icon: '⚙️' },
        { id: 'privacy', title: '隐私设置', icon: '🔒' },
        { id: 'help', title: '帮助与反馈', icon: '❓' },
        { id: 'about', title: '关于我们', icon: 'ℹ️' }
      ]
    }
  ];

  return (
    <View className="profile-page">
      <View className="user-section">
        <Image className="user-avatar" src={userInfo.avatar} mode="aspectFill" />
        <View className="user-info">
          <Text className="user-name">{userInfo.name}</Text>
          <Text className="user-level">{userInfo.level}</Text>
        </View>
      </View>

      <View className="stats-section">
        <View className="stat-item">
          <Text className="stat-number">{userInfo.followers}</Text>
          <Text className="stat-label">粉丝</Text>
        </View>
        <View className="stat-divider" />
        <View className="stat-item">
          <Text className="stat-number">{userInfo.following}</Text>
          <Text className="stat-label">关注</Text>
        </View>
      </View>

      <View className="menu-section">
        {menuSections.map((section, sectionIndex) => (
          <View key={sectionIndex} className="menu-group">
            {section.title && (
              <Text className="menu-title">{section.title}</Text>
            )}
            <View className="menu-list">
              {section.items.map(item => (
                <View key={item.id} className="menu-item">
                  <View className="menu-left">
                    <Text className="menu-icon">{item.icon}</Text>
                    <Text className="menu-text">{item.title}</Text>
                  </View>
                  <View className="menu-right">
                    {item.badge && (
                      <View className="menu-badge">
                        <Text className="badge-text">{item.badge}</Text>
                      </View>
                    )}
                    <Text className="menu-arrow">›</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProfilePage;
