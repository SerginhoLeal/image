const mongoose = require('mongoose');
const Product = mongoose.model('Pasta');

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
        const {nomeProduto, picture} = req.body;
    try{

        const user = await Product.create({
            nomeProduto,
            tipo:"Pasta",
            picture
        });

        res.send({user});

        user.password = undefined;

        }catch(err){
            return res.status(400).send({error:'falha no cadastro'});
        }
    },
};