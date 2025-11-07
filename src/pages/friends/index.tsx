import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

/**
 * 好友页面组件
 * 展示好友列表和相关功能
 */
const FriendsPage: React.FC = () => {
  // 模拟好友数据
  // 实际应用中会从store或API获取
  const mockFriends = [
    { id: '1', name: '张三', avatar: '/assets/images/placeholder.svg', status: 'online' },
  { id: '2', name: '李四', avatar: '/assets/images/placeholder.svg', status: 'offline' },
  { id: '3', name: '王五', avatar: '/assets/images/placeholder.svg', status: 'online' },
  ];
  
  return (
    <View className='friends-page'>
      {/* 页面标题 */}
      <View className='page-header'>
        <Text className='page-title'>好友列表</Text>
      </View>
      
      {/* 好友列表区域 */}
      <View className='friends-list'>
        {mockFriends.map((friend) => (
          <View key={friend.id} className='friend-item'>
            <View className='friend-avatar-container'>
              <Image 
                className='friend-avatar' 
                src={friend.avatar} 
                mode='aspectFill'
              />
              <View className={`status-indicator ${friend.status}`}></View>
            </View>
            <Text className='friend-name'>{friend.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default FriendsPage;