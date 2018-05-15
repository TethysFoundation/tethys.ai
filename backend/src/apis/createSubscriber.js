import mysql from 'promise-mysql';
import config from '../dbconfig';

const INSERT_SQL = 'INSERT IGNORE INTO subscribers (email, country) VALUES (?, ?)';

const createSubscriber = async (request) => {
  const connection = await mysql.createConnection(config);

  const { email, country } = request.body;

  await connection.query(INSERT_SQL, [email, country.toUpperCase()]);

  connection.end();
  return {};
};

export default createSubscriber;
