export let _Vue;
export function install(Vue) {
  _Vue = Vue;

  //1. 我们使用router的时候，在根实例的子组件中都能通过this._routerRoot获取到vm

  // 原理是 Vue.mixin() 给每个组件都混入了一个生命周期函数beforeCreate
  // 我们在Vue的根实例的选项中传入了router属性，内部初始化的时候会将用户传入
  // 的属性和Vue.options上的属性进行合并操作，然后赋值给this.$options，我们
  // 就可以在this.$options上看看有没有router属性，如果有的话，说明是Vue的根实例(判断依据)
  Vue.mixin({
    // 组件的渲染过程：渲染是先父后子，渲染完成是先子后父
    beforeCreate() {
      if (this.$options.router) {
        // 根实例 这里的this指向vm
        this._routerRoute = this; // 将跟实例挂载到routerRoute属性上
        this._router = this.$options.router; // 将router属性保存到_router属性上

        // 调用router的初始化方法
        this._router.init(this)
      } else {
        // 儿子
        this._routerRoute = this.$parent && this.$parent._routerRoute
      }
      console.log(this._routerRoute, 'this._routerRoute')
    }
  })
}