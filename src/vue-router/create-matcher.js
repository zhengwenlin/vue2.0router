import { createRouteMap } from "./create-route-map"
 console.log(createRouteMap, 'rrr')
 export function createMatcher(routes) {
     
    let { pathMap } = createRouteMap(routes)
    // 添加动态路由的，就是给映射表中添加记录
    function addRoutes(routes) {
        // pathMap是老的映射表
        createRouteMap(routes, pathMap)
    }
    // 匹配路由的方法
    function match() {

    }

    return { match, addRoutes }
}