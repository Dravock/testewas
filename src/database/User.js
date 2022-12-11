const connDB = require("./conDB");

// const pool = mysql.createPool({
//     connectionLimit:10,
//     password:"",
//     user:"root",
//     database: "test",
//     host: "host.docker.internal",
//     port:3306
// })

const getAllUser = () => {
    try {
        return new Promise((resolve, reject) =>{
            connDB.query('SELECT * FROM user;', (err,results) =>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    } catch (error) {
        throw { status: 500, message: error };
    }
};

// const getOneUser = (id) => {
//     try {
//         return new Promise((resolve, reject) =>{
//             connDB.query('SELECT * FROM user WHERE id=?;',[id],(err,results) =>{
//                 if(err){
//                     throw {
//                         status: 400,
//                         message: `Can't find user with the id '${id}'`,
//                     };
//                 }
//                 return resolve(results[0]);
//             });
//         });
//     } catch (error) {
//         throw { status: error?.status || 500, message: error?.message || error };
//     }
// };

module.exports = {
    getAllUser,
}