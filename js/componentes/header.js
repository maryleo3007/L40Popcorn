'use strict';
//este js se encarga de pintar la cabecera
const Header= () => {
  const header = $('<header></header>');
  const h1 = $('<h1>PopCorn Time</h1>');
  header.append(h1);
  return header;
};
