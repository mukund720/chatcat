'use strict'
const router = require('express').Router()
let _registerRoutes = (routes, method) => {
    for (let key in routes) {
        let type = typeof routes[key];
        if (type === 'object' && type !== null && !(routes[key] instanceof Array)) {
            _registerRoutes(routes[key], key) // recursive to check all depth
        } else {
            // register the routes
            if (method === 'get') {
                router.get(key, routes[key])
            } else if (method === 'post') {
                router.post(key, routes[key])
            }
            else
            {
                router.use(routes[key])
            }
        }
    }
}
let route=routes=>{
_registerRoutes(routes)
return router;
}

module.exports={
    route:route
}