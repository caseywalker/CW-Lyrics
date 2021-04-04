const resultBuilder = (songObject) => {
  document.querySelector('#lyric-return').innerHTML = `<div>
  <p>${songObject.lyrics}</p>  
  </div>`;
};

export default resultBuilder;
