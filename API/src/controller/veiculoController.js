import { Router } from "express";
import { busca, deletarVeiculo, editarVeiculo, inserirVeiculo, listarVeiculos } from "../repository/veiculoRepository.js";

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

server.get('/veiculo/consulta', async (req, resp) => {

    try{

        const {pesquisa} = req.query;

        let dados = await busca(pesquisa);

        resp.send(dados);

    }

    catch(err){

        resp.status(400).send({

            erro: err.message


        })

    }




})

server.post('/veiculo', async (req, resp) => {

    try{

        const veiculo = req.body;

        if(!veiculo.modelo)
        throw new Error ('Modelo é obrigaório!');

        if(isNaN(veiculo.ano))
            throw new Error("Ano inválido");

            let r2 = await listarVeiculos(veiculo.placa);
            if (r2.length != 0)
            throw new Error('Placa já cadastrada.');


        const veiculoInserido = await inserirVeiculo(veiculo);

        resp.send(veiculoInserido);

    }

    catch(err){

        resp.status(400).send({

            erro: err.message

        })



    }





})

server.delete('/veiculo/:id', async (req, resp) => {

    try{

        const veiculo = req.params.id;


        const veiculoApagado = await deletarVeiculo(veiculo);

        resp.send(200);
    }

    catch(err){
        resp.status(400).send({

            error: err.message

        })


    }


    


})

server.put('/veiculo/:id', async(req, resp) => {

    try{

        const veiculo = req.params.id;
        const novoVeiculo = req.body;

        const veiculoAlterado = editarVeiculo(novoVeiculo, veiculo);
        resp.send(200);


    }

    catch (err) {

        resp.status(400).send({

            error: err.message

        })

    }

    



})


export default server;