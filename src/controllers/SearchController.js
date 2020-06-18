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
}