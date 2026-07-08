function renderGallery() {
    const galleryRef = document.getElementById("gallery");
    galleryRef.innerHTML = "";
    for (let i = 0; i < fotoGallery.length; i++) {
        galleryRef.innerHTML += getGalleryPicture(i);
    }
}

function openDialog(galleryIndex) {
    const dialogRef = document.getElementById("pictureDialog");
    dialogRef.innerHTML = getDialogContent(galleryIndex);
    dialogRef.showModal();
    setDialogFocusOnTop();
    // add slight backdrop animation
    dialogRef.classList.add("opened");
}

function closeDialog(galleryIndex) {
    const dialogRef = document.getElementById("pictureDialog");
    dialogRef.classList.remove("opened");
    dialogRef.close();
}

function renderNextImage(currentImageIndex) {
    const next = (currentImageIndex + 1) % fotoGallery.length;
    renderModalContent(next);
    // keep focus on this button
    setDialogFocusOnNext();
}

function renderPreviousImage(currentImageIndex) {
    // carefull with underflow: add length before modulo operation
    const previous = (currentImageIndex - 1 + fotoGallery.length) % fotoGallery.length;
    renderModalContent(previous);
    // keep focus on this button
    setDialogFocusOnPrevious();
}

// render content of dialog from existing content
function renderModalContent(currentImageIndex) {
    // we COULD also instead closeDialog() and openDialog() with updated index,
    // BUT I believe that would interfere with animations etc later. So Instead update content details.

    // update picture
    const modalHeadRef = document.getElementById("modalHead");
    modalHeadRef.innerHTML = getModalHeadContent(currentImageIndex);

    // update picture
    const dialogPictureRef = document.getElementById("dialogPicture");
    dialogPictureRef.innerHTML = getModalPictureContent(currentImageIndex);

    // update button indices as well
    const modalNavRef = document.getElementById("modalNav");
    modalNavRef.innerHTML = getModalNavigationContent(currentImageIndex);
}

function setDialogFocusOnTop() {
    const dialogCloseRef = document.getElementById("dialogClose");
    dialogCloseRef.focus();
}

function setDialogFocusOnNext() {
    const dialogNextRef = document.getElementById("dialogNext");
    dialogNextRef.focus();
}

function setDialogFocusOnPrevious() {
    const dialogPreviousRef = document.getElementById("dialogPrevious");
    dialogPreviousRef.focus();
}

// make dialog clickable without closing it
function stopDialogPropagation(event) {
    event.stopPropagation();
}
