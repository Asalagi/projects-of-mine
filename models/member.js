const { Pool } = require('pg');
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

const getMembers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM member ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      } else if (results && results.rows) {
        resolve(results.rows);
      } else {
        resolve([]);
      }
    });
  });
};

const getMemberById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT username FROM member WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error);
      } else if (results && results.rows && results.rows[0]) {
        resolve(results.rows[0].username);
      } else {
        resolve(null);
      }
    });
  });
};

const createMember = (body) => {
  const { username, password, email } = body;
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO member (username, password, email) VALUES ($1, $2, $3) RETURNING *',
      [username, password, email],
      (error, results) => {
        if (error) {
          reject(error);
        } else if (results && results.rows && results.rows[0]) {
          resolve(`A new member has been added: ${JSON.stringify(results.rows[0])}`);
        } else {
          resolve("The member was not successfully added to the database.");
        }
      }
    );
  });
};

const updateMember = (id, updatedMember) => {
  const { username, password, email } = updatedMember;

  let query;
  let values;

  if (password) {
      query = 'UPDATE member SET username = $1, password = $2, email = $3 WHERE id = $4 RETURNING *';
      values = [username, password, email, id];
  } else {
      query = 'UPDATE member SET username = $1, email = $2 WHERE id = $3 RETURNING *';
      values = [username, email, id];
  }

  return pool.query(query, values);
};

const deleteMember = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM member WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(`Member deleted with ID: ${id}`);
      }
    });
  });
};

module.exports = {
  getMembers, 
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
};