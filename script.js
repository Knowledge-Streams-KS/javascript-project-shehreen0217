const storageMovies = document.querySelector(".moviess");
const saveToLocalStorage = () => {
  localStorage.setItem("movies", storageMovies.value);
};
document
  .getElementById("searchButton")
  .addEventListener("click", saveToLocalStorage);
const getAllMovies = async () => {
  document.getElementById("movieDisplay").innerHTML = null;
  const apiKey = "a6bd3843";
  let movieName = document.getElementById("movieName").value;
  console.log(movieName);
  let movies = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`
  );
  let data = await movies.json();
  console.log(data);
  console.log(data["Search"]);
  document.getElementById("movieYear").value
    ? filterByYear(data["Search"])
    : data["Search"].map((a) => {
        addMovies(a.Title, a.Poster, a.Year, a.imdbID);
      });
};

let filterByYear = (moviesList) => {
  let year = document.getElementById("movieYear").value;
  let filteredMovies = moviesList.filter((movie) => {
    if (movie["Year"] === year) {
      return movie;
    }
  });
  console.log(filteredMovies);
  filteredMovies.map((a) => {
    addMovies(a.Title, a.Poster, a.Year, a.imdbID);
  });
};
document.getElementById("searchButton").addEventListener("click", getAllMovies);

const addMovies = (title, src, year, imdb) => {
  let movieDiv = document.getElementById("movieDisplay");
  let html = ` <div class="movies">
    <img src=${src}>
    <h3>${title} </h3>
    <p>${year} </p>
    <p>${imdb} </>
    </div>`;

  movieDiv.insertAdjacentHTML("afterend", html);
};

let movieDiv = document.getElementById("movieDisplay");

let a = "year";

let html = `<div> <h2>${a}</h2> </div>`;

movieDiv.insertAdjacentHTML("afterend", html);
