const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        id: String,
        title: String,
        genre: String,
        plot: String,
        description: String,
    });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;