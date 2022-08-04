const VoteService = require('../services/VoteService');

module.exports = {
    //READ get todos
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};

        let enquetes = await VoteService.buscarTodos();

        for(let i in enquetes){
            json.result.push({
                codigo: enquetes[i].codigo,
                nome: enquetes[i].nome,
                data_inicio: enquetes[i].data_inicio,
                data_termino: enquetes[i].data_termino
                // ADICIONAR RESPOSTAS DAS ENQUETES TBM
            });
        }
        res.json(json);
    },

    //READ get um
    buscarUm: async(req, res) =>{
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let enquete = await VoteService.buscarUm(codigo);

        if(enquete){
            json.result = enquete;
        };

        res.json(json);
    },

}