const mysql = require('mysql') 

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sectorial"
})

function consultaSubcategoria(callback){
    let Query = 'SELECT * FROM subcategorias'
    connection.query(Query, (err,result)=>{
        if (err)throw err
        else{
            console.log(result)
            callback(result);
        }
    })
}

function insertSubcategoria ( data,callback){
    let insertQuery = "INSERT INTO subcategorias (subcategoria, estado) VALUES (?,?)"
    let query = mysql.format(insertQuery, [data.subcategoria, data.estado])
    connection.query(query, (err, result)=>{
        if (err)throw err
        else{
            callback(result);
        }
    })

}

function updateSubcategoria(data, callback){
    let update = "UPDATE subcategorias SET subcategoria = ?,estado = ? WHERE id_subcategoria = ?";
    let query = mysql.format(update, [data.subcategoria, data.estado, data.id])
    connection.query(query, (err, result)=>{
        if (err)throw err
        else{
            callback(result);
        }
    })
}

function deleteSubcategoria(id, callback){
    let Delete = "DELETE FROM subcategorias WHERE id_subcategoria="+id
    connection.query(Delete, (err, result)=>{
        if (err)throw err
        else{
            callback(result)
        }
    })
}

function chageEstadoSubcategoria(){

}
module.exports = {insertSubcategoria, consultaSubcategoria, updateSubcategoria, deleteSubcategoria};