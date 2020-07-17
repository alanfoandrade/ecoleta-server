import knex from 'knex';

import knexConfig from '@config/knex';

const connection = knex(knexConfig);

export default connection;
