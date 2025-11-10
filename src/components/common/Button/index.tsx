import React from 'react';
import { Button as TaroButton, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './style.scss';

// 按钮类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'success' | 'warning';

// 按钮尺寸
export type ButtonSize = 'large' | 'medium' | 'small' | 'mini';

// 按钮属性接口
interface ButtonProps {
  // 按钮类型
  type?: ButtonType;
  // 按钮尺寸
  size?: ButtonSize;
  // 是否禁用
  disabled?: boolean;
  // 是否为加载状态
  loading?: boolean;
  // 是否为幽灵按钮
  ghost?: boolean;
  // 是否为圆角按钮
  round?: boolean;
  // 是否为圆形按钮
  circle?: boolean;
  // 是否为块级按钮
  block?: boolean;
  // 自定义类名
  className?: string;
  // 点击事件处理函数
  onClick?: (e: any) => void;
  // 按钮内容
  children: React.ReactNode;
  // 其他Taro Button属性
  [key: string]: any;
}

/**
 * 通用按钮组件
 * 支持多种类型、尺寸和样式定制
 */
const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'medium',
  disabled = false,
  loading = false,
  ghost = false,
  round = false,
  circle = false,
  block = false,
  className = '',
  onClick,
  children,
  ...rest
}) => {
  // 合并类名
  const classes = [
    'custom-button',
    `custom-button--${type}`,
    `custom-button--${size}`,
    disabled && 'custom-button--disabled',
    loading && 'custom-button--loading',
    ghost && 'custom-button--ghost',
    round && 'custom-button--round',
    circle && 'custom-button--circle',
    block && 'custom-button--block',
    className
  ].filter(Boolean).join(' ');

  // 处理点击事件
  const handleClick = (e: any) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <TaroButton
      className={classes}
      disabled={disabled || loading}
      loading={loading}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </TaroButton>
  );
};

export default Button;