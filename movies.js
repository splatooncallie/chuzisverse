@@ -1,408 +1,440 @@
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>chuzi's cinema ♡</title>
  <style>
 /* Reset and base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #0d0d0d;
  color: #ffffff;
  line-height: 1.6;
}

/* Header */
header {
  background-color: #111;
  border-bottom: 1px solid #e50914;
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topbar {
  display: flex;
  gap: 1em;
}

.topbar button {
  background: transparent;
  border: 2px solid #e50914;
  color: #e50914;
  padding: 0.5em 1em;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.topbar button.active,
.topbar button:hover {
  background-color: #e50914;
  color: #fff;
}

/* Hero section */
.hero {
  background: linear-gradient(to top, #0d0d0d 20%, rgba(0,0,0,0.5)), url('https://media.licdn.com/dms/image/v2/D5612AQGy6sM0SJAdxg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693150322893?e=2147483647&v=beta&t=2_aostRG53XjmjiS9FSI9Jcfn73tsoq3uFate9rV0XE') no-repeat center center/cover;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3em 2em;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.3em;
}

.hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 1em;
}

.hero .cta {
  display: inline-block;
  background-color: #e50914;
  padding: 0.7em 1.5em;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.hero .cta:hover {
  background-color: #ff1f1f;
}

/* Search */
.search-container {
  display: flex;
  justify-content: center;
  margin: 3em 1em 2em;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5em;
  background-color: #1a1a1a;
  padding: 0.8em 1.5em;
  border-radius: 999px;
  border: 2px solid #e50914;
  width: 100%;
  max-width: 500px;
}

.search-bar input {
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  flex: 1;
}

.search-bar button {
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #ff1f1f;
}

/* Results */
.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5em;
  padding: 2em;
  max-width: 1400px;
  margin: auto;
}

.card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(229, 9, 20, 0.6);
}

.card img {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.card strong {
  display: block;
  font-size: 16px;
  margin: 0.5em 0;
}

.rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  font-size: 14px;
  color: #f5c518;
  margin-bottom: 0.3em;
}

.rating svg {
  fill: #f5c518;
}

.quality {
  font-size: 12px;
  color: #bbb;
  margin-bottom: 0.6em;
}

.watch-btn {
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.4em 1em;
  margin-bottom: 1em;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.watch-btn:hover {
  background-color: #ff1f1f;
}

/* Footer */
footer {
  text-align: center;
  padding: 2em 1em;
  color: #999;
  background-color: #111;
  margin-top: 2em;
  font-size: 14px;
}

  </style>
</head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<body>
  <header>
    <div class="topbar">
      <button id="modeMovie" class="active" onclick="setMode('movie')">Movies</button>
      <button id="modeSeries" onclick="setMode('series')">TV Series</button>
    </div>
  </header>
  <section class="hero">
  <h1>Welcome to chuzi's cinema ♡</h1>
  <p>Discover movies and shows you love. Stream everything in high quality with just one click.</p>
  <a href="#movieInput" class="cta">Start Watching</a>
</section>


  <div class="search-container">
    <div class="search-bar">
      <input type="text" id="movieInput" placeholder="Enter a title..." />
      <button class="search-btn" onclick="findMedia()">Search</button>
    </div>
  </div>

  <div id="result" class="results"></div>

  <footer>
    © 2025 chuzi's cinema. All rights reserved.
  </footer>

<script>
    // Function to get cookie value by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  // Check cookie on page load
  (async function() {
    const key = getCookie('authKey');
    if (!key) {
      // No key found, redirect to index
      window.location.href = 'index.html';
      return;
    }

    // Fetch the correct key from the protected key file
    try {
      const response = await fetch('protected/key.json');
      if (!response.ok) throw new Error('Key fetch failed');
      const data = await response.json();

      if (key !== data.key) {
        // Key in cookie doesn't match the correct key
        window.location.href = 'index.html';
      }
      // else: key matches, allow access (do nothing)
    } catch (err) {
      // On error fetching key, redirect to index
      window.location.href = 'index.html';
    }
  })();
  const API_KEY = '951a6e7d';
  let currentMode = 'movie';

  function setMode(mode) {
    currentMode = mode;
    document.getElementById('modeMovie').classList.remove('active');
    document.getElementById('modeSeries').classList.remove('active');
    document.getElementById('mode' + (mode === 'movie' ? 'Movie' : 'Series')).classList.add('active');
  }

  async function findMedia() {
    const input = document.getElementById('movieInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!input) {
      resultDiv.innerHTML = 'Please enter a title.';
      return;
    }

    try {
      const searchUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(input)}&type=${currentMode}`;
      const searchRes = await fetch(searchUrl);
      const searchData = await searchRes.json();

      if (searchData.Response === 'False' || !searchData.Search?.length) {
        resultDiv.innerHTML = 'Nothing found.';
        return;
      }

      const filtered = searchData.Search.filter(item => item.Type === currentMode);
      for (const item of filtered) {
        const detailsUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${item.imdbID}`;
        const detailsRes = await fetch(detailsUrl);
        const movie = await detailsRes.json();

        const quality = ['movie', 'series'].includes(movie.Type) ? 'HD' : 'SD';
        resultDiv.innerHTML += `
          <div class="card">
            ${movie.Poster !== 'N/A' ? `<img src="${movie.Poster}" alt="Poster" />` : ''}
            <strong>${movie.Title}</strong>
            <div class="rating">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff4b4b"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ${movie.imdbRating}
            </div>
            <div class="quality">${quality}</div>
            <button class="watch-btn" onclick="openPlayer('${movie.imdbID}', '${movie.Type}', \`${movie.Title.replace(/`/g, '\\`')}\`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="M5 3L19 12L5 21V3Z"/>
              </svg>
              Watch now
            </button>
          </div>
        `;
      }
    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = 'Error fetching data.';
    }
  }

  async function openPlayer(imdbID, type, title) {
    if (type === 'movie') {
      await watchMovie(imdbID);
    } else {
      const win = window.open('', '_blank');
      win.document.write(`
        <style>
          body { margin: 0; display: flex; background: #0d0d0d; color: white; font-family: sans-serif; }
          iframe { border: none; width: 100%; height: 100vh; }
          .sidebar {
            width: 220px;
            background: #1a1a1a;
            padding: 1em;
            display: flex;
            flex-direction: column;
            gap: 1em;
          }
          select {
            padding: 0.5em;
            border-radius: 5px;
            border: none;
            background: #333;
            color: white;
          }
        </style>
        <div class="sidebar">
          <h3>${title}</h3>
          <label>Season: <select id="seasonSelect"></select></label>
          <label>Episode: <select id="episodeSelect"></select></label>
        </div>
        <iframe 
        id="tvPlayer" 
        src=""
        allowfullscreen 
        allow="fullscreen"></iframe>
        <script>
          const imdbID = "${imdbID}";
          async function loadSeasons() {
            const res = await fetch("https://www.omdbapi.com/?apikey=${API_KEY}&i=" + imdbID + "&type=series");
            const data = await res.json();
            const total = parseInt(data.totalSeasons);
            const select = document.getElementById("seasonSelect");
            for (let i = 1; i <= total; i++) {
              select.innerHTML += "<option value='" + i + "'>Season " + i + "</option>";
            }
            select.value = "1";
            loadEpisodes(1);
          }

          async function loadEpisodes(season) {
            const res = await fetch("https://www.omdbapi.com/?apikey=${API_KEY}&i=" + imdbID + "&Season=" + season);
            const data = await res.json();
            const select = document.getElementById("episodeSelect");
            select.innerHTML = "";
            data.Episodes.forEach((ep, i) => {
              select.innerHTML += "<option value='" + (i+1) + "'>Episode " + (i+1) + "</option>";
            });
            select.value = "1";
            loadPlayer(season, 1);
          }

          function loadPlayer(season, episode) {
            document.getElementById("tvPlayer").src = "https://vidsrc.xyz/embed/tv?imdb=" + imdbID + "&s=" + season + "&e=" + episode;
          }

          document.getElementById("seasonSelect").addEventListener("change", e => {
            loadEpisodes(e.target.value);
          });

          document.getElementById("episodeSelect").addEventListener("change", e => {
            const season = document.getElementById("seasonSelect").value;
            loadPlayer(season, e.target.value);
          });

          loadSeasons();
        <\/script>
      `);
    }
  }

  async function watchMovie(imdbID) {
 const finalURL = `https://vidsrc.xyz/embed/movie/${imdbID}`;

  const newTab = window.open("about:blank", "_blank");
  newTab.document.write(`
    <body style="margin:0;background:#000;">
      <iframe src="${finalURL}" 
              style="width:100%;height:100vh;border:none;" 
              allowfullscreen>
        </iframe>
      </body>
    `);
  }
</script>

</body>
</html>
