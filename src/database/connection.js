const knex = require('knex');
const configuration = require('../../knexfile');

// pegando uma variavel de ambiente 
const config = process.env.NODE_ENV === 'test'  ? configuration.test : configuration.development;

// if(process.env.NODE_ENV === 'production'){
//     config = configuration.production;
// }

const connection = knex(config);

// if(process.env.NODE_ENV === 'production'){
    beforEach(async () => {
        await connection.migrate.latest;
    });
// }

module.exports = connection;