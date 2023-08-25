import { con } from './conection.js'


export async function listarCliente(){

    let comando =   'SELECT * FROM TB_CLIENTE';

    let resp = await con.query(comando, []);
    let dados = resp[0];

    return dados;



}

export async function inserirCliente(cliente){

    const comando = `INSERT INTO TB_CLIENTE (NM_CLIENTE, NM_EMAIL, NR_TELEFONE, NR_CPF, NR_CNH)
                        VALUES (?, ?, ?, ?, ?)`

    const resp = await con.query(comando, [
        
        cliente.cliente, 
        cliente.email, 
        cliente.telefone, 
        cliente.cpf, 
        cliente.cnh ])

    cliente.id = resp.insertId;

    return cliente;



}



export async function filtrarNome(nome){

    const comando = `
    SELECT * FROM TB_CLIENTE WHERE NM_CLIENTE like ?
    `

    const resp = await con.query(comando, [`%${nome}%`]);
    let dados = resp[0];

    return dados;


}

export async function deletarCliente(id){



    const comando = `
    DELETE FROM TB_CLIENTE WHERE ID_CLIENTE = ?
    `

    const resp = await con.query(comando, id);
    let dados = resp[0];

    return dados;

}

export async function alterarCliente(cliente, id){

    const comando = `UPDATE TB_CLIENTE 
                    SET NM_CLIENTE = ?, 
                    NM_EMAIL = ?, 
                    NR_TELEFONE = ?, 
                    NR_CPF = ?, 
                    NR_CNH = ?
                    WHERE ID_CLIENTE = ?
                    `

    const resp = await con.query(comando, [
        
        cliente.cliente, 
        cliente.email, 
        cliente.telefone, 
        cliente.cpf, 
        cliente.cnh, id ])


    return cliente;



}

