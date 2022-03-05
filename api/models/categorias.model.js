const mysql = require('mysql') 

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sectorial"
})

function consultaCategoria(callback){
    let Query = 'SELECT * FROM categorias'
    connection.query(Query, (err,result)=>{
        if (err)throw err
        else{
            console.log(result)
            callback(result);
        }
    })
}

function insertCategoria ( data,callback){
    let insertQuery = "INSERT INTO categorias (categoria, estado) VALUES (?,?)"
    let query = mysql.format(insertQuery, [data.categoria, data.estado])
    connection.query(query, (err, result)=>{
        if (err)throw err
        else{
            callback(result);
        }
    })

}

function updateCategoria(data, callback){
    let update = "UPDATE categorias SET categoria = ?,estado = ? WHERE id_categoria = ?";
    let query = mysql.format(update, [data.categoria, data.estado, data.id])
    connection.query(query, (err, result)=>{
        if (err)throw err
        else{
            callback(result);
        }
    })
}

function deleteCategoria(id, callback){
    let Delete = "DELETE FROM categorias WHERE id_categoria="+id
    connection.query(Delete, (err, result)=>{
        if (err)throw err
        else{
            callback(result)
        }
    })
}

function chageEstadoCategoria(){

}
module.exports = {insertCategoria, consultaCategoria, updateCategoria, deleteCategoria};





