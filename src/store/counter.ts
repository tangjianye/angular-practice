import { observable } from 'mobx';

// 计数器状态管理store
const counterStore = observable({
  // 计数器值
  counter: 0,
  
  // 增加计数（修复与store名称冲突的方法）
  incrementCounter() {
    this.counter++;
  },
  
  // 增加计数
  increment() {
    this.counter++;
  },
  
  // 减少计数
  decrement() {
    this.counter--;
  },
  
  // 异步增加计数
  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  }
});

export default counterStore;