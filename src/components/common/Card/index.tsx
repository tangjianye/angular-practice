import React from 'react';
import { View } from '@tarojs/components';
import './style.scss';

// 卡片属性接口
interface CardProps {
  // 标题
  title?: React.ReactNode;
  // 副标题
  subtitle?: React.ReactNode;
  // 卡片内容
  children: React.ReactNode;
  // 底部操作区域
  footer?: React.ReactNode;
  // 是否有边框
  bordered?: boolean;
  // 是否有阴影
  shadow?: boolean;
  // 是否有圆角
  rounded?: boolean;
  // 自定义类名
  className?: string;
  // 卡片头部类名
  headerClassName?: string;
  // 卡片内容类名
  bodyClassName?: string;
  // 卡片底部类名
  footerClassName?: string;
  // 点击事件处理函数
  onClick?: () => void;
}

/**
 * 通用卡片组件
 * 用于包裹和展示内容块
 */
const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  footer,
  bordered = true,
  shadow = false,
  rounded = true,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  onClick
}) => {
  // 合并类名
  const cardClasses = [
    'custom-card',
    bordered && 'custom-card--bordered',
    shadow && 'custom-card--shadow',
    rounded && 'custom-card--rounded',
    className
  ].filter(Boolean).join(' ');

  // 处理点击事件
  const handleClick = () => {
    onClick?.();
  };

  // 渲染头部
  const renderHeader = () => {
    if (!title && !subtitle) return null;

    return (
      <View className={`custom-card__header ${headerClassName}`}>
        {title && <View className='custom-card__title'>{title}</View>}
        {subtitle && <View className='custom-card__subtitle'>{subtitle}</View>}
      </View>
    );
  };

  // 渲染底部
  const renderFooter = () => {
    if (!footer) return null;

    return (
      <View className={`custom-card__footer ${footerClassName}`}>
        {footer}
      </View>
    );
  };

  // 如果有点击事件，则用可点击容器包裹
  if (onClick) {
    return (
      <View className={cardClasses} onClick={handleClick}>
        {renderHeader()}
        <View className={`custom-card__body ${bodyClassName}`}>
          {children}
        </View>
        {renderFooter()}
      </View>
    );
  }

  return (
    <View className={cardClasses}>
      {renderHeader()}
      <View className={`custom-card__body ${bodyClassName}`}>
        {children}
      </View>
      {renderFooter()}
    </View>
  );
};

export default Card;