import React from 'react';
import { View, Text, Image, StyleSheet } from '@tarojs/components';
import './index.scss';

// 占位图常量
const PLACEHOLDER_IMAGE = 'https://xcimg.szwego.com/miniapp_add_customer_fail.jpg';

interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  time: string;
}

const Index: React.FC = () => {
  // 模拟动态数据
  const posts: Post[] = [
    {
      id: 1,
      author: '张三',
      avatar: PLACEHOLDER_IMAGE,
      content: '今天天气真好，出去走走！',
      image: PLACEHOLDER_IMAGE,
      likes: 24,
      comments: 5,
      time: '10分钟前'
    },
    {
      id: 2,
      author: '李四',
      avatar: PLACEHOLDER_IMAGE,
      content: '新项目启动了，加油！💪',
      likes: 42,
      comments: 8,
      time: '1小时前'
    },
    {
      id: 3,
      author: '王五',
      avatar: PLACEHOLDER_IMAGE,
      content: '分享一张美食照片',
      image: PLACEHOLDER_IMAGE,
      likes: 156,
      comments: 23,
      time: '昨天'
    }
  ];

  return (
    <View className="feed-page">
      <View className="page-header">
        <Text className="page-title">动态</Text>
      </View>
      
      <View className="posts-list">
        {posts.map(post => (
          <View key={post.id} className="post-item">
            <View className="post-header">
              <Image className="author-avatar" src={post.avatar} mode="aspectFill" />
              <View className="author-info">
                <Text className="author-name">{post.author}</Text>
                <Text className="post-time">{post.time}</Text>
              </View>
            </View>
            
            <Text className="post-content">{post.content}</Text>
            
            {post.image && (
              <Image className="post-image" src={post.image} mode="aspectFill" />
            )}
            
            <View className="post-actions">
              <View className="action-item">
                <Text className="action-icon">❤️</Text>
                <Text className="action-text">{post.likes}</Text>
              </View>
              <View className="action-item">
                <Text className="action-icon">💬</Text>
                <Text className="action-text">{post.comments}</Text>
              </View>
              <View className="action-item">
                <Text className="action-icon">🔄</Text>
                <Text className="action-text">分享</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Index;
