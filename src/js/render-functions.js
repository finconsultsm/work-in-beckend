import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

function createGallery(images) {
    let markup = "";

    images.map(image => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
        markup += `
            <li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${webformatURL}"
                        alt="${tags}"
                    />
                    </a> 
                    <div class="info">
                        <p><b>Likes</b> ${likes}</p>
                        <p><b>Views</b> ${views}</p>
                        <p><b>Comments</b> ${comments}</p>
                        <p><b>Downloads</b> ${downloads}</p>  
                </div>
            </li>
   `;
    });
    gallery.insertAdjacentHTML("beforeend", markup)
    lightbox.refresh();
}


function clearGallery() {
    gallery.innerHTML = "";
}

function showLoader() {
    loader.classList.remove("is-hidden");
}

function hideLoader() {
    loader.classList.add("is-hidden");
}

export { createGallery, clearGallery, showLoader, hideLoader };