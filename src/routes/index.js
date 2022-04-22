const user = require('./user.route')
function route(app){
    app.use('/user', user)
    app.use((err, req, res, next) => {
        res.status(500).send({ error: 'Something failed!' })
    })
    
}

module.exports = route