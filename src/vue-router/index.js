import { createMatcher } from "./create-matcher";
import { install } from "./install";
import HashHistory from './history/hash'
import BrowerHistory from './history/history'
// 路由就是根据当前的路径，显示对应的组件
export default class VueRouter {
  constructor(options) {
    // routes mode 
    // 1. 根据用户传入的routes规则，生成一个路由的映射表和对应的匹配方法

    // 创建匹配器  match（用于匹配）  addRoutes（动态添加路由）
    // 高阶函数的用法
    this.matcher = createMatcher(options.routes)

    // 创建历史对象

    this.mode = options.mode || 'hash'

    switch (this.mode) {
      case 'hash':
        this.history = new HashHistory(this);
        break;
      case 'history':
        this.history = new BrowerHistory(this)
        break;
    }

  }
  // 初始化方法
  init(app) { // app根实例
     let history = this.history;
     // 路由就是跳转路径，显示对应的组件
     // 页面一上来的时候，跳转到默认的路径，点击link或者调用方法时跳转到对应的路径
     const setupHashListener = () => {
       history.setupListener()
     }
     // 跳转到对应路径后，开启hash监听
     history.transitionTo(history.getCurrentLocation(), setupHashListener)
  }
}

VueRouter.install = install