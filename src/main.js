const express = require ('express')
const http = require ('http')
const bodyParse = require ('body-parser')
const router = require ('./routes')
const cors = require('cors')

const app = express()

app.use(bodyParse.json())

app.use(cors({
  origin: '*'
}))


app.use('/', router)



const server = http.createServer(app)

server.listen(8080, async function() {
    console.log(`Escutando porta ${8080}`)
})