import galleryItems from './gallery-items.js';
// console.log(galleryItems);

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryContainer = document.querySelector('.js-gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
                <a 
                class="gallery__link"
                href="${original}"
                >
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
                </a>
            </li>
            `;
        })
        .join('');
}
