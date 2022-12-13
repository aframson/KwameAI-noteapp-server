/**
 * DATABASE SETTINGS (MYSQL)
 */
const  mysql = require('mysql')
const  Config = require('../Config')
// Railway CONFIGURATION
let connection = mysql.createPool({
    host: Config.CONNECTION_URL,
    user: Config.USER,
    port: Config.PORT,
    password: Config.PASSWORD,  
    database: Config.DB_NAME
});
// connection.connect(error => {
//     if (error) {
//       console.log('❌❌ Database error , Oops could not connect to the mysql ')
//       console.log('❌❌ database kindly check the config file to configure  setings ')
//       return
//     } else { 
//       console.log('⚡ 🌿 ✅ Database connected successfully')
//     }
//   });


module.exports = connection;