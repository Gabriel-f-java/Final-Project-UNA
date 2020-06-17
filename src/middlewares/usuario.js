const crud = require('../CRUDs/cruds')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function insereUsuario(req, res, next) {

    const saltRound = 8;
    const hash = await bcrypt.hash(req.body.password, saltRound)

    try {
        await crud.inserirUsuario(req.body.login, hash, req.body.id_pessoa)
        req.body['status'] = { "Message": "Sucesso!" }
    }
    catch (error) {
        req.body['status'] = { "Message": "Não cadastrado!" }
    }

    next()

}

async function loginUsuario(req, res, next) {

   

    try {
        crud.loginUser(req.body.login).then(
            
            async (result) => {
               
                if (result.length > 0) {
                  

                    for (let linhas of result) {

                        let verificaHash = await bcrypt.compare(req.body.password, linhas.password)

                        if (verificaHash == true) {
                            const responseJwt = jwt.sign({
                                role: 'Admim',
                                permissoes: ['permisao1', 'permissao2']
                            },
                                "SecretKey", { expiresIn: '100d' })

                            
                            res.send({ "Message": "Cadastro Realizado com sucesso!", "jwt": responseJwt })

                        }
                        else {
                            res.send({ "Message": "Sai fora mano!", "jwt": null })
                        }
                     }
                 }
             })
        }
        catch (error) {

        res.status(404).json({ "Message": "Deu tudo errado" }) 
        
        }
    }

module.exports = { insereUsuario, loginUsuario }