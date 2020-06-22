const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'web dev projeto final',
  password: 'divacada157',
})

//exportando a variável para que outros scripts possam importar
module.exports= {pool}
