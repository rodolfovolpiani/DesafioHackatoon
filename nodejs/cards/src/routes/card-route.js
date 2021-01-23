const api = require('../controllers/card-controller')

module.exports = (app) => {
    app.route('/cards')
        .get(api.findAll)
        .post(api.save)
    
    app.route('/cards/paginationAndSorting')
        .get(api.find)
}