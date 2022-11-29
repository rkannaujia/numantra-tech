import mysql from 'mysql';

//alter user 'root'@'localhost'identified with mysql_native_password by 'rahul';
export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rahul",
    database:"social"
});
