import { Router } from "express";
import { listarVeiculos } from "../repository/veiculoRepository.js";

const server = Router();

server.get('/veiculo', async (req, resp) => {


    try{

        const dados = await listarVeiculos();
        resp.send(dados);

    }

    catch(err){

        resp.status(400).send({

            error: err.message
        })


    }




})

server.post('/veiculo', async (req, resp) => {

    try{

        const veiculo = req.body;

        const veiculoInserido = await listarVeiculos();

        resp.send(veiculoInserido);

    }

    catch(err){

        resp.status(400).send({

            erro: err.message

        })



    }





})


export default server;