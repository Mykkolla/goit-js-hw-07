import { galleryItems } from './gallery-items.js';
// Change code below this line

// add ItemsImg
const galleryItemsTable = galleryItems.map(({preview , original, description}) => 
`<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>`
).join('');


const galleryMain = document.querySelector('.gallery');

galleryMain.insertAdjacentHTML('beforeend', galleryItemsTable);

const hendlerClickOnImg = (e) => {
// preventDefault
    e.preventDefault();
// checkOnClick
if(!e.target.classList.contains('gallery__image')) {
    return;
}
// change src
e.target.src = e.target.dataset.source;
// modal
const imageSrc = e.target.src;
const imageAlt = e.target.alt;

const lightbox = basicLightbox.create(`
      <img src="${imageSrc}" alt="${imageAlt}">
    `);  
lightbox.show();

// close modal
 const hendlerCloseModalEsc = (e) => {
    if(e.code === "Escape") {
lightbox.close()
    }
 } 
 if(lightbox.visible()) {
    window.addEventListener('keydown', hendlerCloseModalEsc)
 }
};


galleryMain.addEventListener('click', hendlerClickOnImg)



