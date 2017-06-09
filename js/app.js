'use strict'; //obliga a escribir es6

const render = (root) =>{
  root.empty();//lmpiar el sistema
  const wrapper = $('<div class="wrapper"></div>'); // dentro este div vaos a devolver todos los demas elements como lo hace react
  //append componentes
  wrapper.append(Header());

  if (state.selectMovie == null) {
    wrapper.append(MovieGrid(_ => {
        render(root);
    }));

  }
  else {
    wrapper.append(MovieDetails(_ => {
      render(root);
    }));
  }

  root.append(wrapper);
};
//AQUI CREAMOS LOS DIFERENTES ELEMENTOS
const state = {
  movies:movies,
  selectMovie: null
}
$( _ => {
  //funcion de render, jalams el div ddonde crearemos el render qe es quien lo va a pintar
  const root = $('.root');
  render(root);
})
