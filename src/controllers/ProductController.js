const mongoose = require('mongoose');

const {findConnections, sendMessage} = require('../WebSocket')

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const {tipo} = req.query;

        const sens = await Product.find({
            tipo:{
                $in:tipo,
            },
        });

        return res.json(sens);
    },

    async store(req, res){
        const {
            produtoNome,
            preco,
            tipo,
            picture,
        } = req.body;

        // const tipoArray = parseStrings(tipo);

        user = await Product.create({
            produtoNome,
            preco,
            tipo,
            picture,
        });

        const sendSocketMessageTo = findConnections(
            tipo,
        );
        console.log(sendSocketMessageTo);
        sendMessage(sendSocketMessageTo, 'new-product', user)

        res.send({user});

    },
};