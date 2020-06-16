const conexao = require('../database/pgDataBase')

async function inserirUsuario(login, password, id_pessoa){
    const insertQuery = {
        text: 'INSERT INTO usuarios(login, password, id_pessoa) VALUES($1, $2, $3) RETURNING id_usuario',
        values: [login, password, id_pessoa],
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);

    client.release();

    return resultado;
}

async function inserirPessoa(nome, rg, cpf, data_nascimento){
    const insertQuery = {
        text: 'INSERT INTO pessoas(nome, rg, cpf, data_nascimento) VALUES($1, $2, $3, $4) RETURNING id_pessoa',
        values: [nome, rg, cpf, data_nascimento],
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);

    client.release();

    return resultado;
}

async function loginUser(login){
    const insertQuery = {
        text: 'Select * from usuarios where login = $1',
        values: [login],
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);

    client.release();

    return resultado;
}


module.exports = { inserirUsuario, inserirPessoa, loginUser }