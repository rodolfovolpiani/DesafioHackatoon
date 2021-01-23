const { request, response } = require('express')
const neDB = require('../configurations/database')
const api = {}

api.findAll = (request, response) => {
    neDB.find({}).sort({ name: 1}).exec((exception, cards) => { 
        if(exception) {
            const setence = 'Opa, deu ruim na tentativa de listar todos os cards!!!'
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({'mensagem' : setence})
        }

        response.json(cards)
    })
}

api.save = (request, response) => {
    const canonical = request.body

    neDB.insert(canonical, (exception, card) => {
        if(exception) {
            console.log('Opa, deu ruim na tentativa de inserir um customer!', exception)
        }
        response.json(card)
        response.status(201)
    })
}

api.delete = (request, response) => {
    neDB.remove({ cardNumber: {} }, {}, (exception, cards) => {
        if(exception) {
            console.log('Não foi deletado', exception)
        }
        response.json(cards)
        response.status(202)
    })

}
       














module.exports = api