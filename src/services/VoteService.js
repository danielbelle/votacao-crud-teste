const db = require('../db');

module.exports = {

    //READ get todos
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('SELECT * FROM enquetes', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

        //READ get um
        buscarUm: (codigo) => {
            return new Promise((aceito, rejeitado) => {
    
                db.query('SELECT * FROM enquetes WHERE codigo = ?', [codigo], (error,results)=>{
                    if(error) { rejeitado(error); return; }
                    if(results.length>0){
                        aceito(results[0]);
                    }else{
                        aceito(false);
                    }
                });
            });
        },

};