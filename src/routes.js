const express = require('express');
const router = express.Router();

const VoteController = require('./controllers/VoteController');

//READ rota para pegar todos
router.get('/enquetes', VoteController.buscarTodos);

//READ rota para pegar um
router.get('/enquete/:codigo', VoteController.buscarUm);

// CREATE rota para criar um
router.post('/enquete', VoteController.inserir);

// UPDATE rota para fazer update em dado
router.put('/enquete/:codigo', VoteController.alterar);

// DELETE rota para deletar um dado
router.delete('/enquete/:codigo', VoteController.excluir);

module.exports = router;