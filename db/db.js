//Requiere a la base de datos
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'movies_db',
    password: 'no puedo poner mi contraseña jajaj'
});


connection.connect((err) =>{
    if(err){
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database.');
});


module.exports = connection;


