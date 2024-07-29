// script.js

$(document).ready(function () {
    $('#movieForm').on('submit', function (event) {
        event.preventDefault();

        let title = $('#title').val().trim();
        let rating = parseFloat($('#rating').val());

        if (title.length < 2) {
            alert('Title must be at least 2 characters long.');
            return;
        }

        if (rating < 0 || rating > 10 || isNaN(rating)) {
            alert('Rating must be between 0 and 10.');
            return;
        }

        let movieItem = `
            <div class="movie-item">
                <span>${title}</span>
                <span>${rating}&#9733</span>
                <button class="remove-button">Remove</button>
            </div>
        `;

        $('#movieList').append(movieItem);
        $('#movieForm')[0].reset();
    });

    $('#movieList').on('click', '.remove-button', function () {
        $(this).parent().remove();
    });

    $('#sortTitleAsc').on('click', function () {
        sortMovies('title', 'asc');
    });

    $('#sortTitleDesc').on('click', function () {
        sortMovies('title', 'desc');
    });

    $('#sortRatingAsc').on('click', function () {
        sortMovies('rating', 'asc');
    });

    $('#sortRatingDesc').on('click', function () {
        sortMovies('rating', 'desc');
    });

    function sortMovies(criteria, order) {
        let movies = $('.movie-item').toArray();
        movies.sort((a, b) => {
            let aVal = $(a).children('span').eq(criteria === 'title' ? 0 : 1).text();
            let bVal = $(b).children('span').eq(criteria === 'title' ? 0 : 1).text();
            if (criteria === 'rating') {
                aVal = parseFloat(aVal);
                bVal = parseFloat(bVal);
            }
            if (order === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
        $('#movieList').empty().append(movies);
    }
});
