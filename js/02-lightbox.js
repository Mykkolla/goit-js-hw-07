import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryItemsTable = galleryItems.map(({preview , original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');


const galleryMain = document.querySelector('.gallery');

galleryMain.insertAdjacentHTML('beforeend', galleryItemsTable);


const hendlerClickOnImg = (e) => {
    // preventDefault
        e.preventDefault();}

 galleryMain.addEventListener('click', hendlerClickOnImg)

 let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});



