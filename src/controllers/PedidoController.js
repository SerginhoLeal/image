const mongoose = require('mongoose');

const Grap = mongoose.model('Usuario');
const Grap2 = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const {pedido} = req.query;
        const sens = await Grap2.find({
            pedido:{
                $in:pedido,
            },
        });

        return res.json({sens});
    },
    async store(req, res){
        const { user } = req.headers;//pega o usuario logado.
        const { idProduct } = req.params;//pega o usuario selecionado e não logado.

        const UsuarioLogado = await Grap.findById(user);//não preciso mexer em nada aqui.
        const UsuarioReceptor = await Grap2.findById(idProduct);//não preciso mexer em nada aqui.

        const filterRocket = UsuarioReceptor.pedido.filter(ped => ped.includes(UsuarioLogado.nome));

            if(UsuarioLogado.nome == filterRocket)//para que o usuário não possa dar like duas vezes.
                return res.status(400).json({error: 'Você já pediu esse produto'})//retorna o aviso.

            UsuarioReceptor.pedido.push(UsuarioLogado.nome);//Adicionando o nome do usuario logado no usuário receptor.

            await UsuarioReceptor.save();//salva dentro do array.


        return res.json(UsuarioReceptor);//retorna para o usuário logado.
    },
    async store2(req,res){
        const { user } = req.headers;
        const { idRemove } = req.params;

        const UsuarioLogado = await Grap.findById(user);//não preciso mexer em nada aqui.
        const UsuarioReceptor = await Grap2.findById(idRemove);//não preciso mexer em nada aqui.

        const filterRocket = UsuarioReceptor.pedido.filter(ped => ped.includes(UsuarioLogado.nome));
        
        try{
            if(UsuarioLogado.nome == filterRocket){
                UsuarioReceptor.pedido.remove(UsuarioLogado.nome);//Adicionando o nome do usuario logado no usuário receptor.
                await UsuarioReceptor.save();
            }
        }catch(err){
            console.log(err)
            return res.status(400).send({error:'fail'});
        }

        return res.json(UsuarioReceptor);
    },
};

//splice