import React from 'react';
import { View, Text, Image, StyleSheet } from '@tarojs/components';
import './index.scss';

// 占位图常量
const PLACEHOLDER_IMAGE = 'https://xcimg.szwego.com/miniapp_add_customer_fail.jpg';

const FriendsPage: React.FC = () => {
  // 模拟好友数据
  const friends = [
    { id: 1, name: '张三', avatar: PLACEHOLDER_IMAGE, status: '在线' },
    { id: 2, name: '李四', avatar: PLACEHOLDER_IMAGE, status: '离线' },
    { id: 3, name: '王五', avatar: PLACEHOLDER_IMAGE, status: '在线' },
    { id: 4, name: '赵六', avatar: PLACEHOLDER_IMAGE, status: '在线' },
    { id: 5, name: '孙七', avatar: PLACEHOLDER_IMAGE, status: '离线' },
  ];

  return (
    <View className="friends-page">
      <View className="page-header">
        <Text className="page-title">好友列表</Text>
      </View>
      
      <View className="friends-list">
        {friends.map(friend => (
          <View key={friend.id} className="friend-item">
            <Image 
              className="friend-avatar" 
              src={friend.avatar} 
              mode="aspectFill"
            />
            <View className="friend-info">
              <Text className="friend-name">{friend.name}</Text>
              <Text className={`friend-status ${friend.status === '在线' ? 'online' : 'offline'}`}>
                {friend.status}
              </Text>
            </View>
            <View className="right-arrow">
              <Text className="arrow-icon">›</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default FriendsPage;