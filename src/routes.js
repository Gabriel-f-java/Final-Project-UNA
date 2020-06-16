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

module.exports = router