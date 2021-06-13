import $ from 'jquery';
// change require to es6 import style

import './style.scss';

let x = 2;
function display() {
  $('#main').html(`You've been on this page for ${x} seconds! Keep it up, go for a record...`);
  x += 1;
}
setInterval(display, 1000);
