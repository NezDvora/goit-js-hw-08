// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('ul');

gallery.style.listStyle= 'none';

const addItems = galleryItems.map(
(item) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
    </a>
    </li>`
).join('');

gallery.insertAdjacentHTML('afterbegin', addItems);

let lightbox = new SimpleLightbox('.gallery li a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 350,
    scrollZoom: false,
});