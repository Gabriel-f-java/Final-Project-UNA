const express = require("express");
const router = express.Router();

const cadastroUsuario = require('./middlewares/usuario')
const cadastroPessoa = require('./middlewares/pessoas')

const resend = require('./controller/resendUser')

router.post('/cadastro/usuario',
    cadastroPessoa.inserePessoa,
    cadastroUsuario.insereUsuario,
    resend.realizaRes
)

const login = require('./middlewares/usuario')

router.post('/login/usuario',
    login.loginUsuario
)

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


const cadastroCategoria = require('./middlewares/categoria')
const resendCategoria = require('./controller/resendCategoria')

router.post('/categoria/cadastro',
    cadastroCategoria.insereCategoria,
    resendCategoria.realizaResCategoria
)

const selecionarCategoria = require('./middlewares/categoria')

router.get('/categoria/selecionar',
    selecionarCategoria.selectCategoria,
    resendCategoria.realizaResGetCategoria
)


//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


const cadastroEmpresa = require('./middlewares/empresa')

router.post('/empresa/cadastro',
    cadastroEmpresa.insereEmpresa
)

const selectEmpresa = require('./middlewares/empresa')

router.get('/empresa/selecionar',
    selectEmpresa.selectEmpresa
)

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


const cadastroProduto = require('./middlewares/produto')

router.post('/produto/cadastro',
    cadastroProduto.insereProduto
)

module.exports = router