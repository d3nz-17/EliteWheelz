import { con } from './conection.js';

export async function listarVeiculos(){

    const comando = `
    SELECT * FROM TB_VEICULO
    `;

    let [resp] = await con.query(comando, []);

    return resp;






}

export async function busca(pesquisa){

    






}


export async function inserirVeiculo(veiculo){

const comando = `

INSERT INTO TB_VEICULO (TP_VEICULO, NM_MODELO, DT_ANO, DS_PLACA)
            VALUES (?, ?, ?, ?)
`

const resp = await con.query(comando [
    veiculo.tipo,
    veiculo.modelo,
    veiculo.ano,
    veiculo.placa
])

veiculo.id = resp.insertId;

return veiculo;


}

export async function deletarVeiculo(){






}

export async function editarVeiculo(){






}