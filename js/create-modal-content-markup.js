export default function createModalContentMarkup(films) {
    
    return films
      .map(
        ({
          nameOriginal,
          genres,
          year,
          ratingImdb,
          posterUrlPreview,
          posterUrl,
        }) => {
          return `<img
          class="modal-poster"
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/f56710bd-85c3-49b8-9260-2fa8a3d07c01/600x900"
          alt="Description image"
          width="800"
        />
        <div class="modal-info">
          <p class="modal-title">Film title</p>
          <p class="modal-description">Film description</p>
          <p class="modal-director">Film director</p>
          <p class="modal-date">Film date</p>
        </div>`;
        }
      )
      .join('');
  }