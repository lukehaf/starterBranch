import $ from 'jquery';
// change require to es6 import style

import './style.scss';

setInterval(display, 1000);

let x = 2;

function display() {
  $('#main').html(`You've been on this page for ${x} seconds, my guy.`);
  x++;
}
