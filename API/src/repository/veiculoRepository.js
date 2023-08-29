import { con } from './conection.js';

export async function listarVeiculos(){

    const comando = `
    SELECT * FROM TB_VEICULO
    `;

    let [resp] = await con.query(comando, []);

    return resp;






}

export async function busca(pesquisa){

    
    const comando = `
    SELECT * FROM TB_VEICULO WHERE 
                            NM_MODELO LIKE ? OR
                            NM_MARCA LIKE ? OR
                            DS_PLACA LIKE ?

    `
    let [dados] = await con.query(comando, ['%' + pesquisa + '%', '%' + pesquisa + '%', '%' + pesquisa + '%']);

    return dados;





}


export async function inserirVeiculo(veiculo){



const comando = `

INSERT INTO TB_VEICULO (TP_VEICULO, NM_MODELO, NM_MARCA, DT_ANO, DS_PLACA)
            VALUES (?, ?, ?, ?, ?)
`


const resp = await con.query(comando, [
    veiculo.tipo,
    veiculo.modelo,
    veiculo.marca,
    veiculo.ano,
    veiculo.placa
])

veiculo.id = resp.insertId;

return veiculo;


}

export async function deletarVeiculo(id){

    const comando = `
    DELETE FROM TB_VEICULO WHERE ID_VEICULO LIKE ?
    `

    let [dados] = await con.query(comando, [id]);

    return dados.affectedRows;




}

export async function editarVeiculo(veiculo, id){

    const comando = `
    UPDATE TB_VEICULO 
            SET 
            TP_VEICULO = ?,
            NM_MODELO = ?,
            NM_MARCA = ?,
            DT_ANO = ?,
            DS_PLACA = ?

    `

    const [dados] = await con.query(comando, [
        veiculo.tipo, 
        veiculo.modelo, 
        veiculo.marca,
        veiculo.ano,
        veiculo.placa,
        id
    ]);

    return dados;





}