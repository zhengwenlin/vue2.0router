

export function createRouteMap(routes, oldPathMap) {
    let pathMap = oldPathMap || {}
    routes.forEach(route => {
        addRouteRecord(route, pathMap, null)
    })

    return { pathMap };
}

function addRouteRecord(route, pathMap, parentPath) {
    let path = parentPath ? parentPath + '/' + route.path : route.path;
    let record = {
        path: path,
        parent: parentPath,
        component: route.component,
        meta: route.meta,
        props: route.props,
        name: route.name
    }
    if (!pathMap[path]) {
        pathMap[path] = record;
    }

    if (route.children) {
        route.children.forEach(child => {
            addRouteRecord(child, pathMap, path)
        })
    }
}