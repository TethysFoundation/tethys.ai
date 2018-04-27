import mysql from 'promise-mysql';
import config from '../dbconfig';

const createSubscriber = async (request) => {
  const connection = await mysql.createConnection(config);

  const { email, country } = request.body;
  const insertSQL = `INSERT IGNORE INTO subscribers (email, country) VALUES ('${email}', '${country.toUpperCase()}')`;

  await connection.query(insertSQL);

  connection.end();
  return {};
};

// eslint-disable-next-line import/prefer-default-export
export { createSubscriber };
