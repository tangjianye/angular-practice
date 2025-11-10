import React from 'react';
import { View, Image } from '@tarojs/components';
import './index.scss';

// 头像尺寸
export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

// 头像形状
export type AvatarShape = 'circle' | 'square';

// 头像属性接口
interface AvatarProps {
  // 头像图片URL
  src?: string;
  // 头像尺寸
  size?: AvatarSize;
  // 头像形状
  shape?: AvatarShape;
  // 默认头像（当没有图片时显示）
  defaultAvatar?: React.ReactNode;
  // 是否显示边框
  bordered?: boolean;
  // 是否可点击
  clickable?: boolean;
  // 自定义类名
  className?: string;
  // 点击事件处理函数
  onClick?: () => void;
}

/**
 * 通用头像组件
 * 用于显示用户或实体的头像
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 'medium',
  shape = 'circle',
  defaultAvatar,
  bordered = false,
  clickable = false,
  className = '',
  onClick
}) => {
  // 合并类名
  const classes = [
    'custom-avatar',
    `custom-avatar--${size}`,
    `custom-avatar--${shape}`,
    bordered && 'custom-avatar--bordered',
    clickable && 'custom-avatar--clickable',
    className
  ].filter(Boolean).join(' ');

  // 处理点击事件
  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  // 渲染默认头像
  const renderDefaultAvatar = () => {
    if (defaultAvatar) {
      return defaultAvatar;
    }
    // 默认显示用户图标
    return <View className="custom-avatar__placeholder">用户</View>;
  };

  // 渲染内容
  const renderContent = () => {
    if (src) {
      return (
        <Image
          className="custom-avatar__image"
          src={src}
          mode="aspectFill"
          onError={renderDefaultAvatar}
        />
      );
    }
    return renderDefaultAvatar();
  };

  return (
    <View className={classes} onClick={handleClick}>
      {renderContent()}
    </View>
  );
};

export default Avatar;