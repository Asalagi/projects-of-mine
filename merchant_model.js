const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my_user',
    host: 'location',
    database: 'my_database',
    password: 'root',
    port: 5432,
//^ wording not reccommended for production, just using for testing and tutorial
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        });
    });
}
const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
        const { name, email } = body
        pool.query('INSET INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new merchant had been added added: ${results.rows[0]}`);            
        })
    })
}
const deleteMerchant = (id) => {
    return new Promise(function(resolve, reject) {
        pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant deleted with ID: ${id}`);
        })
    })
}

moduele.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
}