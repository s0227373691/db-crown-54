const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

const pool = new Pool({
    // user: 'postgres',
    // host: 'localhost',
    // database: 'crown_54',
    // password: '0000',
    // port: '5432'
    connectionString: isProduction? process.env.DATABSE_URL: `postgresql://postgres:0000@localhost:5432/crown_54`
})

pool.query('SELECT * from category_54', (err, res) => {
    console.log(JSON.stringify(res.rows))
    pool.end()
})

module.exports = pool

// postgres://ypjjltgljvhmag:97be55290a479bb97afec58173910db6c614021b4157ad62c03b1b3f46d228ca@ec2-52-87-123-108.compute-1.amazonaws.com:5432/dfv6lu33u4vr34