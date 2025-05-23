<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Movie Details</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 1rem;
      background: #111;
      color: #eee;
    }
    a {
      color: #f90;
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    img {
      max-width: 300px;
      border-radius: 10px;
      margin-bottom: 1rem;
    }
    .details {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .info {
      max-width: 450px;
    }
    iframe {
      margin-top: 1rem;
      width: 100%;
      height: 315px;
      border: none;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <a href="index.html">&larr; Back to Search</a>
  <div id="movieDetails"></div>

  <script>
    const apiKey = 'eec8827d'; // Your OMDb API key

    const params = new URLSearchParams(window.location.search);
    const imdbID = params.get('id');
    const detailsDiv = document.getElementById('movieDetails');

    if (!imdbID) {
      detailsDiv.innerHTML = '<p>No movie selected.</p>';
    } else {
      detailsDiv.innerHTML = 'Loading...';

      async function fetchMovie() {
        try {
          const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`);
          const data = await res.json();
          if (data.Response === "True") {
            detailsDiv.innerHTML = `
              <h1>${data.Title} (${data.Year})</h1>
              <div class="details">
                <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}" alt="${data.Title}" />
                <div class="info">
                  <p><strong>Genre:</strong> ${data.Genre}</p>
                  <p><strong>Runtime:</strong> ${data.Runtime}</p>
                  <p><strong>Director:</strong> ${data.Director}</p>
                  <p><strong>Actors:</strong> ${data.Actors}</p>
                  <p><strong>Plot:</strong> ${data.Plot}</p>
                  <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
                  <p><strong>Awards:</strong> ${data.Awards}</p>
                  <p><a href="https://www.imdb.com/title/${data.imdbID}/" target="_blank" rel="noopener">View on IMDb</a></p>
                </div>
              </div>
              <h2>Official Trailer (YouTube)</h2>
              <div id="trailer"></div>
            `;

            const trailerDiv = document.getElementById('trailer');
            const ytQuery = encodeURIComponent(`${data.Title} official trailer`);
            trailerDiv.innerHTML = `
              <iframe 
                src="https://www.youtube.com/embed?listType=search&list=${ytQuery}" 
                allowfullscreen 
                title="YouTube Trailer">
              </iframe>
            `;
          } else {
            detailsDiv.innerHTML = '<p>Movie not found.</p>';
          }
        } catch (e) {
          detailsDiv.innerHTML = '<p>Error loading movie details.</p>';
        }
      }

      fetchMovie();
    }
  </script>
</body>
</html>
