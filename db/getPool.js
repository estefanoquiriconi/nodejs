const mysql = require('mysql2/promise');

const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DB
} = process.env;


let pool;

const getPool = async() =>{
    try{
        if(!pool){
            const poolTem = mysql.createPool({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD
            })
            await poolTem.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

            pool = mysql.createPool({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DB,
                connectionLimit: 10,
                timezone: 'Z'
            });
        }
        return pool;
    }catch (err){
        console.error(err);
    }
}

module.exports = getPool;
