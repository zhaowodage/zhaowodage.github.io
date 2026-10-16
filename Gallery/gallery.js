(function () {
  const root = document.getElementById("photo-timeline");
  if (!root) return;

  const albums = Array.isArray(window.GALLERY_ALBUMS)
    ? window.GALLERY_ALBUMS.slice()
    : [];

  albums.sort((a, b) => String(b.date).localeCompare(String(a.date)));

  if (!albums.length) {
    root.innerHTML =
      '<div class="gallery-empty">还没有照片。把图片放到 <code>img/gallery/</code>，并在 <code>Gallery/photos.js</code> 里添加条目即可。</div>';
    return;
  }

  const escapeHtml = (str) =>
    String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const formatDate = (dateStr) => {
    const m = String(dateStr).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return escapeHtml(dateStr);
    return `${m[1]}年${m[2]}月${m[3]}日`;
  };

  let html = "";
  let lastYear = null;

  albums.forEach((album, albumIndex) => {
    const year = String(album.date || "").slice(0, 4) || "未知";
    if (year !== lastYear) {
      html += `<div class="photo-year">${escapeHtml(year)}</div>`;
      lastYear = year;
    }

    const photos = Array.isArray(album.photos) ? album.photos : [];
    const galleryName = `gallery-${albumIndex}`;

    const photosHtml = photos
      .map((photo) => {
        const src = escapeHtml(photo.src);
        const caption = escapeHtml(photo.caption || album.title || "");
        return `
          <a href="${src}" data-fancybox="${galleryName}" data-caption="${caption}">
            <img src="${src}" alt="${caption}" loading="lazy" onerror="this.onerror=null;this.src='/img/404.jpg'">
            ${photo.caption ? `<span class="caption">${caption}</span>` : ""}
          </a>`;
      })
      .join("");

    html += `
      <article class="photo-entry">
        <div class="photo-entry-meta">
          <span class="photo-entry-date"><i class="far fa-calendar-alt"></i>${formatDate(album.date)}</span>
          <h3 class="photo-entry-title">${escapeHtml(album.title || "未命名相册")}</h3>
        </div>
        ${album.desc ? `<p class="photo-entry-desc">${escapeHtml(album.desc)}</p>` : ""}
        <div class="photo-grid">${photosHtml}</div>
      </article>`;
  });

  root.innerHTML = html;

  const totalPhotos = albums.reduce(
    (sum, a) => sum + (Array.isArray(a.photos) ? a.photos.length : 0),
    0
  );
  const countEl = document.getElementById("gallery-count");
  if (countEl) {
    countEl.textContent = `${albums.length} 组 · ${totalPhotos} 张`;
  }

  if (window.Fancybox) {
    Fancybox.bind("[data-fancybox]", {
      Hash: false,
    });
  }
})();
