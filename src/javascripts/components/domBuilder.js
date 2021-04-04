const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="main-container d-flex justify-content-center">
    <div id="lyric-form"></div>
    <div id="lyric-return"></div>
  </div>`;
};

export default domBuilder;
