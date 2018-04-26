import fs from 'fs';

const databaseConfig = JSON.parse(fs.readFileSync('database.json'));

let config = {};

if (process.env.NODE_ENV === 'production') {
  config = {
    host: databaseConfig.prod.host,
    database: databaseConfig.prod.database,
    username: process.env[databaseConfig.prod.user.ENV],
    password: process.env[databaseConfig.prod.password.ENV],
  };
} else {
  config = {
    host: databaseConfig.dev.host,
    database: databaseConfig.dev.database,
    username: databaseConfig.dev.user,
    password: databaseConfig.dev.password,
  };
}

export default config;
