import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

/**
 * 消息页面组件
 * 展示消息列表和相关功能
 */
const MessagePage: React.FC = () => {
  // 模拟消息数据
  // 实际应用中会从store或API获取
  const mockMessages = [
    { 
      id: '1', 
      avatar: '/assets/images/placeholder.svg', 
      sender: '张三', 
      content: '你好，最近怎么样？', 
      time: '10:30',
      unread: 2
    },
    { 
      id: '2', 
      avatar: '/assets/images/placeholder.svg', 
      sender: '李四', 
      content: '明天有空吗？一起吃饭', 
      time: '昨天',
      unread: 0
    },
    { 
      id: '3', 
      avatar: '/assets/images/placeholder.svg', 
      sender: '王五', 
      content: '项目进度怎么样了？', 
      time: '周一',
      unread: 1
    },
  ];
  
  return (
    <View className='message-page'>
      {/* 页面标题 */}
      <View className='page-header'>
        <Text className='page-title'>消息列表</Text>
      </View>
      
      {/* 消息列表区域 */}
      <View className='message-list'>
        {mockMessages.map((message) => (
          <View key={message.id} className='message-item'>
            {/* 头像区域 */}
            <View className='avatar-container'>
              <Image 
                className='message-avatar' 
                src={message.avatar} 
                mode='aspectFill'
              />
              {message.unread > 0 && (
                <View className='unread-badge'>{message.unread}</View>
              )}
            </View>
            
            {/* 消息内容区域 */}
            <View className='message-content'>
              <View className='message-header'>
                <Text className='message-sender'>{message.sender}</Text>
                <Text className='message-time'>{message.time}</Text>
              </View>
              <Text className='message-text'>{message.content}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MessagePage;