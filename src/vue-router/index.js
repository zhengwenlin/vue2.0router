import { createMatcher } from "./create-matcher";
import { install } from "./install";
// 路由就是根据当前的路径，显示对应的组件
export default class VueRouter {
   constructor(options){
       // routes mode 
       // 1. 根据用户传入的routes规则，生成一个路由的映射表和对应的匹配方法

       // 创建匹配器  match（用于匹配）  addRoutes（动态添加路由）
       // 高阶函数的用法
       this.matcher = createMatcher(options.routes)

       console.log(this.matcher)
   }
}

VueRouter.install = install