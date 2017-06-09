'use strict';
const MovieDetails = (update) => {
  const container = $('<div class="movieDetails"></div>');
  const title = $('<h1>'+state.selectMovie.title+'</h1>');
  const button = $('<button>Regresar</button>');

  container.append(title);
  container.append(button);

  button.on('click', (e) => {
    e.preventDefault();
    state.selectMovie = null;
    update();
  })

  return container;
}
