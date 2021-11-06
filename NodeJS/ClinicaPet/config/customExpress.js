const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser'); //Aqui utilizando a instalação do Body-parser

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true})) //Consumo com html
    app.use(bodyParser.json()) //consumo com Api Json
    consign()
        .include('controllers')
        .into(app)
    
        return app
}

