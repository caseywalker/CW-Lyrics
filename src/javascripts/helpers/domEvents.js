import resultBuilder from '../components/resultBuilder';
import getLyrics from './lyricData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-btn')) {
      e.preventDefault();
      const songObject = {
        artist: document.querySelector('#artistInput').value,
        title: document.querySelector('#songInput').value
      };
      console.warn(songObject);
      getLyrics(songObject).then((result) => resultBuilder(result));
    }
  });
};

export default domEvents;
