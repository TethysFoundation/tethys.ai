import fs from 'fs';

function getConfig() {
  const databaseConfig = JSON.parse(fs.readFileSync('database.json'));

  if (process.env.NODE_ENV === 'production') {
    return {
      host: process.env[databaseConfig.prod.host.ENV],
      database: databaseConfig.prod.database,
      user: process.env[databaseConfig.prod.user.ENV],
      password: process.env[databaseConfig.prod.password.ENV],
    };
  }

  return {
    host: databaseConfig.dev.host,
    database: databaseConfig.dev.database,
    user: databaseConfig.dev.user,
    password: databaseConfig.dev.password,
  };
}

export default getConfig();
