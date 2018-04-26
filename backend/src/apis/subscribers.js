import mysql from 'promise-mysql';
import config from '../dbconfig';

function connectToDB() {
  return mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
  });
}

const createSubscriber = async (request) => {
  const body = JSON.parse(request.rawBody);

  const connection = await connectToDB();

  // TODO insert into subscribers
  await connection.query('SELECT * FROM subscribers')
    .then(res => console.log(JSON.stringify(res)));

  connection.end();

  return {
    status: 201,
    email: body.email,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { createSubscriber };
