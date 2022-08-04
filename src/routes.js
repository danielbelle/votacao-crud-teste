const express = require('express');
const router = express.Router();

const VoteController = require('./controllers/VoteController');

//READ rota para pegar todos
router.get('/enquetes', VoteController.buscarTodos);

//READ rota para pegar um
router.get('/enquetes/:codigo', VoteController.buscarUm);

// CREATE rota para criar um
// router.post('/enquetes', VoteController.inserir);

// UPDATE rota para fazer update em dado
// router.put('/enquetes/:codigo', VoteController.alterar);

// DELETE rota para deletar um dado
// router.delete('/enquetes/:codigo', VoteController.excluir);

module.exports = router;