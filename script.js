function renderGallery() {
    const galleryRef = document.getElementById("gallery");
    galleryRef.innerHTML = "";
    for (let i = 0; i < fotoGallery.length; i++) {
        galleryRef.innerHTML += getGalleryPicture(i);
    }
}
const dialogRef = document.getElementById("pictureDialog");

function openDialog(galleryIndex) {
    dialogRef.innerHTML = getDialogContent(galleryIndex);
    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog(galleryIndex) {
    dialogRef.classList.remove("opened");
    dialogRef.close();

}

function renderNextImage(currentImageIndex) {
    const next = (currentImageIndex + 1) % fotoGallery.length;
    renderModalImageAndNav(next);
}

function renderPreviousImage(currentImageIndex) {
    // carefull with underflow: add length before modulo operation
    const previous = (currentImageIndex - 1 + fotoGallery.length) % fotoGallery.length;
    renderModalImageAndNav(previous);
}

// render content of dialog from existing content
function renderModalImageAndNav(currentImageIndex) {
    // we COULD also instead closeDialog() and openDialog() with updated index, 
    // BUT I believe that would interfere with animations etc later. So Instead update content details.

    // update picture
    const modalHeadRef = document.getElementById("modalHead");
    modalHeadRef.innerHTML = getModalHeadContent(currentImageIndex);

    // update picture
    const dialogPictureRef = document.getElementById("dialogPicture");
    dialogPictureRef.innerHTML = getModalPicture(currentImageIndex);

    // update button indices as well
    const modalNavRef = document.getElementById("modalNav");
    modalNavRef.innerHTML = getModalNavigationContent(currentImageIndex);
}
