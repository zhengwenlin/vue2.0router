#### router
- 前端路由： hash模式  history模式
- hash模式： window.loaction.hash = 'xxx' / window.addEventListener('hashchange')
- history模式： history.pushState() / window.addEventListener('popstate')


#### 使用步骤：
- Vue.use(VueRouter)，使用插件
- 配置路由规则 routes
- 导出router实例
- 注入到Vue根实例中router属性

#### 实现router

- VueRouter是一个类
- install方法，
