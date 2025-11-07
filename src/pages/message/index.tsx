import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from '@tarojs/components';
import './index.scss';

// 占位图常量
const PLACEHOLDER_IMAGE = 'https://xcimg.szwego.com/miniapp_add_customer_fail.jpg';

interface Message {
  id: number;
  sender: string;
  avatar: string;
  content: string;
  time: string;
  unreadCount: number;
}

const MessagePage: React.FC = () => {
  // 模拟消息数据
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: '张三', avatar: PLACEHOLDER_IMAGE, content: '你好，在吗？', time: '10:30', unreadCount: 2 },
    { id: 2, sender: '李四', avatar: PLACEHOLDER_IMAGE, content: '项目进展怎么样了？', time: '昨天', unreadCount: 0 },
    { id: 3, sender: '王五', avatar: PLACEHOLDER_IMAGE, content: '明天有空一起吃饭吗？', time: '前天', unreadCount: 1 },
    { id: 4, sender: '赵六', avatar: PLACEHOLDER_IMAGE, content: '资料我已经发你邮箱了', time: '周一', unreadCount: 0 },
    { id: 5, sender: '系统通知', avatar: PLACEHOLDER_IMAGE, content: '您的账号已通过实名认证', time: '上周', unreadCount: 0 },
  ]);

  // 标记消息为已读
  const markAsRead = (id: number) => {
    setMessages(prevMessages =>
      prevMessages.map(msg =>
        msg.id === id ? { ...msg, unreadCount: 0 } : msg
      )
    );
  };

  return (
    <View className="message-page">
      <View className="page-header">
        <Text className="page-title">消息列表</Text>
      </View>
      
      <View className="message-list">
        {messages.map(message => (
          <View 
            key={message.id} 
            className="message-item"
            onClick={() => markAsRead(message.id)}
          >
            <View className="avatar-container">
              <Image 
                className="sender-avatar" 
                src={message.avatar} 
                mode="aspectFill"
              />
              {message.unreadCount > 0 && (
                <View className="unread-badge">
                  <Text className="unread-count">
                    {message.unreadCount > 99 ? '99+' : message.unreadCount}
                  </Text>
                </View>
              )}
            </View>
            
            <View className="message-content">
              <View className="message-header">
                <Text className={`sender-name ${message.unreadCount > 0 ? 'unread' : ''}`}>
                  {message.sender}
                </Text>
                <Text className="message-time">{message.time}</Text>
              </View>
              <Text 
                className={`message-text ${message.unreadCount > 0 ? 'unread' : ''}`}
                numberOfLines={1}
              >
                {message.content}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MessagePage;