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

api.paginationAndSorting = (request, response) => {
    neDB.find({embossName: {}}).sort({ documentNumber: 1 }).exec((exception, pagination) => {
        if(exception) {
            const setence = 'Opa, deu ruim na tentativa de listar todos os cards!!!'
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({'mensagem' : setence})
        }

        response.json(cards)
    })
}
       














module.exports = api