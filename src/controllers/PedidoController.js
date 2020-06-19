const mongoose = require('mongoose');

const Grap = mongoose.model('Usuario');
const Grap2 = mongoose.model('Product');

module.exports = {
    async store(req, res){
        const { user } = req.headers;//pega o usuario logado.
        const { idProduct } = req.params;//pega o usuario selecionado e não logado.

        const UsuarioLogado = await Grap.findById(user);//não preciso mexer em nada aqui.
        const UsuarioReceptor = await Grap2.findById(idProduct);//não preciso mexer em nada aqui.

        const filterRocket = UsuarioReceptor.pedido.filter(ped => ped.includes(UsuarioLogado.nome));

        try{
            if(UsuarioLogado.nome == UsuarioReceptor.nome)//para que o criador não possa dar like em si mesmo.
                return res.status(400).json({error: 'Você não pode se avaliar'})//retorna o aviso.

            if(UsuarioLogado.nome == filterRocket)//para que o usuário não possa dar like duas vezes.
                return res.status(400).json({error: 'Você Já pediu esse produto'})//retorna o aviso.

            UsuarioReceptor.pedido.push(`${UsuarioLogado.nome}`);//Adicionando o nome do usuario logado no usuário receptor.

            await UsuarioReceptor.save();//salva dentro do array.

        }catch{
            return res.status(400).send({error:'fail'});
        }

        return res.json(UsuarioReceptor);//retorna para o usuário logado.
    }
};