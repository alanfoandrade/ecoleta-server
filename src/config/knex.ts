import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'docker',
    database: 'ecoleta',
  },
  migrations: {
    directory: path.resolve(
      __dirname,
      '..',
      'shared',
      'infra',
      'knex',
      'migrations',
    ),
  },
  seeds: {
    directory: path.resolve(
      __dirname,
      '..',
      'shared',
      'infra',
      'knex',
      'seeds',
    ),
  },
};
