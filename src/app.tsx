import React from 'react';
import { Provider } from 'mobx-react';
import { useDidShow, useDidHide } from '@tarojs/taro';

// 导入store
import counterStore from './store/counter';
import userStore from './store/user';
import './app.scss';

// 合并所有store，提供给全局使用
const stores = {
  counterStore,
  userStore
};

/**
 * 应用入口组件
 * 使用函数组件和React Hooks实现应用程序生命周期管理
 */
function App({ children }: { children: React.ReactNode }) {
  // 生命周期钩子 - 应用显示
  useDidShow(() => {
    // 生产环境可以移除或替换为更有意义的初始化逻辑
    if (process.env.NODE_ENV !== 'production') {
      console.log('应用显示');
    }
  });

  // 生命周期钩子 - 应用隐藏
  useDidHide(() => {
    // 生产环境可以移除或替换为资源清理逻辑
    if (process.env.NODE_ENV !== 'production') {
      console.log('应用隐藏');
    }
  });

  return (
    <Provider store={stores}>
      {children}
    </Provider>
  );
}

export default App;
