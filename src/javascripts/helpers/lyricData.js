import axios from 'axios';

// const dbUrl = 'https://api.lyrics.ovh/v1/lizzo/tempo';

const getLyrics = (songObject) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${songObject.artist}/${songObject.title}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject((error)));
});

export default getLyrics;
