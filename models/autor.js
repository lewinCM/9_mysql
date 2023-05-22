
// Obtener todos Authores 
const AllUser = () => {
    return db.query('SELECT * FROM authors');
}

//Consulta para CREAR un Author
const create = ({ name, email, image }) => {
    return db.query('INSERT INTO authors (name, email, image) VALUES (?,?,?)',
        [name, email, image]);
};

//Consulta para LEER un POST
const getById = (id) => {
    return db.query('SELECT * FROM posts WHERE id_author = ?',
        [id]);
}





module.exports = {
    AllUser,
    create,
    getById
}