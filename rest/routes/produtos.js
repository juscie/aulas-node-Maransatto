const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando o GET dentro da rota produtos'
  });
});

router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;

  res.status(200).send({
    mensagem: 'Usando o GET de um produto especifico',
    id: id
  });
});

router.post('/', (req, res, next) => {
  const produto = {
    nome: req.body.nome,
    preco: req.body.preco
  };

  res.status(201).send({
    mensagem: 'Produto criado',
    produtoCriado: produto
  });
});

router.put('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;

  res.status(200).send({
    mensagem: 'Usando o PUT de um produto especifico',
    id: id
  });
});

router.patch('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;

  res.status(200).send({
    mensagem: 'Usando o PATCH alaterar campo especifico especifico',
    id: id
  });
});

router.delete('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;

  res.status(200).send({
    mensagem: 'Usando o DELETE para excluir produto especifico',
    id: id
  });
});

module.exports = router;
