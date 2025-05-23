const movies = [
  { title: "Inception", videoUrl: "https://example.com/inception" },
  { title: "Interstellar", videoUrl: "https://example.com/interstellar" },
  { title: "The Matrix", videoUrl: "https://example.com/matrix" },
];

const input = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  movieList.innerHTML = "";

  movies
    .filter(movie => movie.title.toLowerCase().includes(query))
    .forEach(movie => {
      const div = document.createElement("div");
      div.textContent = movie.title;
      div.onclick = () => {
        window.open(movie.videoUrl, "_blank");
      };
      movieList.appendChild(div);
    });
});
