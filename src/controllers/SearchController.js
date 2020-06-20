const mongoose = require('mongoose');
const Sea = mongoose.model('Product');
const parseStrings = require('../utils/parseString');

module.exports = {
    async index(req, res){
        const {tipo} = req.query;

        const desc = parseStrings(tipo);

        const sens = await Sea.find({
            tipo:{
                $in:desc,
            },
        });

        return res.json({sens});
    },
    async indexPerfil(req, res){
        const {pedido} = req.query;

        const desc2 = parseStrings(pedido);

        const sens = await Sea.find({
            pedido:{
                $in:desc2,
            },
        });

        return res.json({sens});
    },
}