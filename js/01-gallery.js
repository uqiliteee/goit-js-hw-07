import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItem = document.querySelector('.gallery');

const galleryCreating = createGalleryMarkup(galleryItems);

galleryItem.insertAdjacentHTML('afterbegin', galleryCreating);
galleryItem.addEventListener('click', onGalleryClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
        <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
        />
        </a>
        </div>`
    }
    )
    .join('');
}
function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return
    };
    
    const libraryRef = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src= "${libraryRef}">
    `)
    instance.show()
}

