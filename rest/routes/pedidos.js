const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Retorna todos os pedidos'
  });
});

router.get('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido;

  res.status(200).send({
    mensagem: 'Retorna pedido único por id',
    id: id
  });
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Iserir pedido'
  });
});

router.put('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido;

  res.status(200).send({
    mensagem: 'Alterar pedido especifico',
    id: id
  });
});

router.patch('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido;

  res.status(200).send({
    mensagem: 'Alterar campo especifico do pedido',
    id: id
  });
});

router.delete('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido;

  res.status(200).send({
    mensagem: 'Excluir pedido especifico pelo id',
    id: id
  });
});

module.exports = router;