import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import clienteController from './controller/clienteController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`));

server.use(clienteController);
