'use strict';
// [{ NO TRABJAMS DE ESTA MANERA PQ PUEDEN EXISTIR DEPENDENCIAS Y PPOR ESO LO CREAMOS EN APP.JS
//   img:'',
//  state:
// }]

const movieItem = (movie, update) => {
  const item = $('<a href="#" class="movie"></a>');
  const image = $(`<img src='${movie.thumb}' alt='${movie.title}'>`);
  const p = $('<p>'+movie.title+'</p>');


  item.append(image);
  item.append(p);

  item.on('click',(e)=>{
    e.preventDefault();
    state.selectMovie = movie;
    update();
  });
  return item;
}

const MovieGrid = (update)=>{
  const movieContainer = $("<div class='movieContainer'></div>");
  state.movies.forEach((movie)=>{
    movieContainer.append(movieItem(movie,update));
  });
  return movieContainer;
}
