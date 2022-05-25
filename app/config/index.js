'user strict'
if (process.env.NODE_ENV === 'production') {
    // user production stage env variables
    module.exports = {
        host: process.env.host || "",
        dbURI: process.env.dbURI || ""
    }
} else {
    // use development stage env variables
    module.exports = require('./development.json')
}