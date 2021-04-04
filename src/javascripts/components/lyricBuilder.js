const lyricBuilder = () => {
  document.querySelector('#lyric-form').innerHTML = `<form>
  <div class="mb-3">
    <label for="artistInput" class="form-label">Artist:</label>
    <input type="text" class="form-control" id="artistInput" aria-describedby="artist" required>
  </div>
  <div class="mb-3">
    <label for="songInput" class="form-label">Song</label>
    <input type="text" class="form-control" id="songInput" required>
  </div>
  <button type="submit" class="btn btn-primary" id="submit-btn">Submit</button>
</form>`;
};

export default lyricBuilder;
