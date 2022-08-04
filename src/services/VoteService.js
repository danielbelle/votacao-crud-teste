const db = require('../db');

module.exports = {

    //READ get todos
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM enquetes', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    //READ get um
    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM enquetes WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    //CREATE post um
    inserir: (nome, data_inicio, data_termino, pergunta) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO enquetes (nome, data_inicio, data_termino, pergunta) VALUES (?, ?, ?, ?)', [nome, data_inicio, data_termino, pergunta], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.insertCodigo);
            });
        });
    },

    //UPDATE put atualizar um
    alterar: (codigo, nome, data_inicio, data_termino, pergunta) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE enquetes SET nome =?, data_inicio =?, data_termino =?, pergunta =? WHERE codigo =?', [nome, data_inicio, data_termino, pergunta, codigo], (error,results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    //DELETE delete  um
    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM enquetes WHERE codigo =?', [codigo], (error,results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }


};