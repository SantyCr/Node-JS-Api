const mysql = require('mysql') 

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sectorial"
})

function consultaTema(callback){
    let Query = 'SELECT * FROM temas'
    connection.query(Query, (err,result)=>{
        if (err)throw err
        else{
            console.log(result)
            callback(result);
        }
    })
}

function insertTema ( data,callback){
    let insertQuery = "INSERT INTO temas (tema, estado) VALUES (?,?)"
    let query = mysql.format(insertQuery, [data.tema, data.estado])
    connection.query(query, (err, result)=>{
        if (err)throw err
        else{
            callback(result);
        }
    })

}

function updateTema(data, callback){
    let update = "UPDATE temas SET tema = ?,estado = ? WHERE id_tema = ?";
    let query = mysql.format(update, [data.tema, data.estado, data.id])
    connection.query(query, (err, result)=>{
        if (err)throw err
        else{
            callback(result);
        }
    })
}

function deleteTema(id, callback){
    let Delete = "DELETE FROM tema WHERE id_tema="+id
    connection.query(Delete, (err, result)=>{
        if (err)throw err
        else{
            callback(result)
        }
    })
}

function chageEstadoTema(){

}
module.exports = {insertTema, consultaTema, updateTema, deleteTema};