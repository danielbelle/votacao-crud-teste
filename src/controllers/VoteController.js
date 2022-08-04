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

    //CREATE post um
    inserir: async(req, res) =>{
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let data_inicio = req.body.data_inicio;
        let data_termino = req.body.data_termino;
        let pergunta = req.body.pergunta;
        //ADICIONAR RESPOSTAS TBM

        if(nome && data_inicio && data_termino && pergunta){//ADICIONAR RESPOSTAS TBM
            let EnqueteCodigo = await VoteService.inserir(nome, data_inicio, data_termino, pergunta); //ADICIONAR RESPOSTAS TBM
            json.result = {
                codigo: EnqueteCodigo,
                nome,
                data_inicio,
                data_termino,
                pergunta
                //ADICIONAR RESPOSTAS TBM
            };

        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    //Update put um dado
    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let data_inicio = req.body.data_inicio;
        let data_termino = req.body.data_termino;
        let pergunta = req.body.pergunta;
        //ADICIONAR RESPOSTAS TBM

        if(codigo && nome && data_inicio && data_termino && pergunta){
            await VoteService.alterar(codigo, nome, data_inicio, data_termino, pergunta);
            json.result = {
                codigo,
                nome, 
                data_inicio, 
                data_termino, 
                pergunta
            };

        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    //Delete delete um dado
    excluir: async(req, res) => {
        let json = {error:'', result:{}};
        
        await VoteService.excluir(req.params.codigo);

        res.json(json);
    }

}