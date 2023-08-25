
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

const getHorseById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM horses WHERE id = $1', [id], (error, result) => {
        if (error) {
            reject(error);
        } else {
            response(results.row);
        }
    });
};

const createHorse = (request, response) => {
    const { field } = request.body

    pool.query('INSERT INTO horses (field) VALUES $[number]', [field], (error, results) => {
        if (error) {
            reject(error);
        } else {
            response(results.row);
        }
    });
};

const updateHorse = (request, response) => {
    const id = parseInt(request.params.id)
    const { field } = request.body
    
    pool.query('UPDATE horses SET filed = $value WHERE id = $[last number value]',
    [filed, field, id],
    (error, results) => {
        if (error) {
            reject(error);
        } else {
            response(results.row);
        }
    });
};

const deleteHorse = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM horses WHERE id = $1', [id], (error, results) => {
        if (error) {
            reject(error);
        } else {
            response(results.row);
        }
    });
};


module.exports = {
    getHorses,
    getHorseById,
    createHorse,
    updateHorse,

};