// controllers/movieController.js
const db = require('../db/db');

const getAllMovies = (req, res) => {
    const sql = 'SELECT * FROM movies';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Asegúrate de exportar todos los métodos necesarios
module.exports = {
    getAllMovies,
    // Agrega aquí otros métodos como createMovie, getMovieById, updateMovie, deleteMovie
};