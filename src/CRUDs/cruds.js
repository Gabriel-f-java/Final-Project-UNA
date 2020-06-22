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
    const selectQuery = {
        text: 'SELECT * FROM usuarios where login = $1 ',
        values: [login],
    }

    const promise = new Promise((resolve, reject) => {
        conexao.pool.connect((err, client, release) => {

            if (err) {
                console.error('Error acquiring client', err.stack)
            }
            client.query(selectQuery, (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack)
                    reject(err)
                }
                else {
                    resolve(result.rows);
                }
            })

        })
    })
    return promise;
}

async function inserirCategoria(descricao){
    const insertQuery = {
        text: 'INSERT INTO categoria(descricao) VALUES($1) RETURNING id_categoria',
        values: [descricao],
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);

    client.release();

    return resultado;
}

async function findAllCategoria(){
    const SelectQuery = {
        text: 'SELECT * FROM categoria'
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(SelectQuery);

    client.release();

    return resultado;
}

async function inserirEmpresa(nome, cnpj, data_cadastro){
    const insertQuery = {
        text: 'INSERT INTO empresa(nome, cnpj, data_cadastro) VALUES($1, $2, $3) RETURNING id_empresa',
        values: [nome, cnpj, data_cadastro],
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);

    client.release();

    return resultado;
}

async function findAllEmpresa(){
    const selectQuery = {
        text: 'SELECT * FROM empresa'
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(selectQuery);

    client.release();

    return resultado;
}

async function inserirProduto(nome, valor, id_empresa, id_categoria){
    const insertQuery = {
        text: 'INSERT INTO produto(nome, valor, id_empresa, id_categoria) VALUES($1, $2, $3, $4) RETURNING id_produto',
        values: [nome, valor, id_empresa, id_categoria],
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);

    client.release();

    return resultado;
}

module.exports = { inserirUsuario, inserirPessoa, loginUser, inserirCategoria, inserirEmpresa, inserirProduto, findAllCategoria, findAllEmpresa }