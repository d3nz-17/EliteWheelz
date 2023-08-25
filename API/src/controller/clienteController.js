import { listarCliente, inserirCliente, filtrarNome, deletarCliente, alterarCliente  } from "../repository/clienteRepository.js";
import { Router } from "express";

const server = Router();


server.get('/cliente', async (req, resp) => {
    try{

        const dados = await listarCliente();
        resp.send(dados);

    }
    catch (err){

        resp.status(400).send({
            erro: err.message
        })

    }
})



server.get('/cliente/busca', async (req, resp) => {


    try {
        const { nome } = req.query;
        const dados = await filtrarNome(nome);
        resp.send(dados);
    }

    catch (err){

        resp.status(400).send({
            erro: err.message

        })


    }
    
})

server.post('/cliente', async (req, resp) => {

    try {
        const cliente = req.body;

        let nome = req.body.cliente;
        let LC = await listarCliente();

        console.log(LC);

        let nominho = [];

        nominho = LC.map(item => {item})

        console.log(nominho);

        const clienteInserido = await inserirCliente(cliente);

        resp.send(clienteInserido);
    }

    catch (err){

        resp.status(400).send({
            erro: err.message

        })


    }



})

server.delete('/cliente/:id', async (req, resp) => {

    try {

        const id = req.params.id;
        const clienteDeletado = await deletarCliente(id);

        resp.send(200);

        
    }

    catch (err){

        resp.status(400).send({
            erro: err.message

        })


    }



})

server.put('/cliente/:id', async (req, resp) => {

    try {
        const id = req.params.id;
        const cliente = req.body;

        const clienteAtualizado = await alterarCliente(cliente, id);

        resp.send(clienteAtualizado);
    }

    catch (err){

        resp.status(400).send({
            erro: err.message

        })


    }



})




















export default server;