import path from 'path';
import knexConfig from './src/config/knex';

module.exports = {
  knexConfig,
  migrations: {
    directory: path.resolve(
      __dirname,
      'src',
      'shared',
      'infra',
      'typeorm',
      'migrations',
    ),
  },
};
