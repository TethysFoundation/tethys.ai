import mysql from 'promise-mysql';
import config from '../dbconfig';

const createSubscriber = async (request) => {
  const connection = await mysql.createConnection(config);

  // TODO insert into subscribers
  await connection.query('SELECT * FROM subscribers')
    .then(res => console.log(JSON.stringify(res)));

  connection.end();

  return {
    email: request.body.email,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { createSubscriber };
