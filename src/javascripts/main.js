// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import domBuilder from './components/domBuilder';
import lyricBuilder from './components/lyricBuilder';
import domEvents from './helpers/domEvents';

const init = () => {
  document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>';
  domBuilder();
  lyricBuilder();
  domEvents();
  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
