import React from 'react';
import { Provider } from 'mobx-react';
import { useDidShow, useDidHide } from '@tarojs/taro';

// 导入store
import counterStore from './store/counter';
import userStore from './store/user';

import './app.scss';

// 合并所有store
const store = {
  counterStore,
  userStore
};

/**
 * 应用入口组件
 * 使用函数组件和React Hooks实现
 */
function App({ children }: { children: React.ReactNode }) {
  // 生命周期钩子 - 应用显示
  useDidShow(() => {
    console.log('App showed');
  });

  // 生命周期钩子 - 应用隐藏
  useDidHide(() => {
    console.log('App hidden');
  });

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

// 导出配置信息
export default App;
