'use strict'
const h = require('../helpers')

module.exports = () => {
    let routes = {
        'get': {
            '/': (req, res, next) => {
                res.render('login', {
                    pageTitle: 'My Login Page'
                })
            },
            '/login': (req, res, next) => {
                res.render('login', {
                    pageTitle: 'My Login Page'
                })
            },
            '/rooms': (req, res, next) => {
                res.render('rooms', {
                    pageTitle: 'My Rooms Page'
                })
            },
            '/chatroom': (req, res, next) => {
                res.render('chatroom', {
                    pageTitle: 'My Chat Page'
                })
            },
            '/chat': (req, res, next) => {
                res.render('chatroom', {
                    pageTitle: 'My Chat Page'
                })
            },
        },
        'post': {

        },
        'NA': (req, res, next) => {
            res.status(404).sendFile(process.cwd()+'/views/404.htm')
        }
    }

    
    return h.route(routes)
}