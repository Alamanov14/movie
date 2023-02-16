let container = document.querySelector(".container");
let API = "https:www.omdbapi.com/?apikey=b6003d8a&s=All";
console.log(API);
fetch(API);
fetch(API)
  .then((data) => data.json())

  .then((res) => {
    res.Search.forEach((elem) => {
      container.innerHTML += `<div class='card'><img src=${elem.Poster}class='movie-img' >  <h2 class='movie-title'>${elem.Title}</h2> <p class='movie-year'>Year
      ${elem.Year}</p> </div>`;
    });
  });
// let description = document.querySelector("#description");
// let movieDescription = document.querySelector("movie-title");
// movieDescription.addEventListener("mouseover", () => {
//     description.innerHTML+=`<p></p>`
// });
