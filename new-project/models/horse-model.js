
const pool = require('../config/connect-horse');

const getHorses = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM horses ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows);
            }
        });
    });
};

module.exports = {
    getHorses,
};