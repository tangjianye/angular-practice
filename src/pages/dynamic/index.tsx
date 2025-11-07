import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';

/**
 * 动态页面
 * 空白页面，作为TabBar的第一个入口
 */
const DynamicPage: React.FC = () => {
  return (
    <View className="dynamic-page">
      {/* 空白页面内容 */}
    </View>
  );
};

export default DynamicPage;