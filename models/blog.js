const allUser = () => {
    return db.query('SELECT p.id_post, p.title, p.description, p.created_date, p.category , a.name as author, a.email, a.image FROM posts as p JOIN authors as a ON p.id_author = a.id_author');
};

//Consulta para CREAR un POST
const create = ({ title, description, category, author }) => {
    return db.query('INSERT INTO posts (title, description, category, id_author) VALUES (?,?,?,?)',
        [title, description, category, author]);
};

//Consulta para LEER un POST
const getById = (id) => {
    return db.query('SELECT p.id_post, p.title, p.description, p.created_date, p.category , a.name as author, a.email, a.image FROM posts as p JOIN authors as a ON p.id_author = a.id_author WHERE p.id_post = ?',
        [id]);
}





module.exports = {
    allUser,
    create,
    getById
}