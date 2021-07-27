const knex = require('knex')
require('dotenv').config()

const db = knex({
    client:'pg',
    connection: {
		host: process.env.DB_HOST,
		ssl: {
			rejectUnauthorized: false,
		},
		user: process.env.DB_USER,
		password:process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	}});
module.exports = db;

// const db = knex({
// 	client: "pg",
// 	connection: {
// 		host: process.env.DB_HOST,
// 		ssl: {
// 			rejectUnauthorized: false,
// 		},
// 		user: process.env.DB_USER,
// 		password:
// 			process.env.DB_PASSWORD,
// 		database: process.env.DB_DATABASE,
// 	},
// });