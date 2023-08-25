
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
    pool.query('SELECT * FROM horses WHERE id = $1', [id], (error, results) => {
        if (error) {
            response.status(500).json({ error: 'An error occurred' }); 
        } else {
            response.json(results.rows[0]); 
        }
    });
ƒ};

const createHorse = (body) => {
    const { name, breed, month_of_birth, year_of_birth, sex, height, color, price, notes } = body;
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO horses (name, breed, month_of_birth, year_of_birth, sex, height, color, price, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [name, breed, month_of_birth, year_of_birth, sex, height, color, price, notes],
        (error, results) => {
          if (error) {
            reject(error);
          } else if (results && results.rows && results.rows[0]) {
            resolve(`A new horse has been added: ${JSON.stringify(results.rows[0])}`);
          } else {
            resolve("The horse was not successfully added to the database.");
          }
        }
      );
    });
  };

const updateHorse = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, breed, month_of_birth, year_of_birth, sex, height, color, price, notes } = request.body
    
    pool.query('UPDATE horses SET name = $1, breed = $2, month_of_birth = $3, year_of_birth = $4, sex = $5, height = $6, color = $7, price = $8, notes = $9 WHERE id = $10 RETURNING *',
        [name, breed, month_of_birth, year_of_birth, sex, height, color, price, notes, id],
        (error, results) => {
            if (error) {
                response.status(500).json({ error: 'An error occurred' }); 
            } else {
                response.json(results.rows[0]); 
            }
        });
};

const deleteHorse = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM horses WHERE id = $1 RETURNING *', [id], (error, results) => {
        if (error) {
            response.status(500).json({ error: 'An error occurred' }); 
        } else {
            response.json(results.rows[0]); 
        }
    });
};

module.exports = {
    getHorses,
    getHorseById,
    createHorse,
    updateHorse,
    deleteHorse,
};
