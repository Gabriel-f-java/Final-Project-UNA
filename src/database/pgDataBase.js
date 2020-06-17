const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'trabalho1506',
  password: 'batata123',
})

//exportando a variável para que outros scripts possam importar
module.exports= {pool}
