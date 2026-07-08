function renderGallery() {
    const galleryRef = document.getElementById("gallery");
    galleryRef.innerHTML = "";
    for (let i = 0; i < pictureGallery.length; i++) {
        galleryRef.innerHTML += getGalleryPicture(i);
    }
}

function openDialog(galleryIndex) {
    const label = getTrimmedLabel(galleryIndex);
    const dialogRef = document.getElementById("pictureDialog");
    dialogRef.innerHTML = getDialogContent(galleryIndex, label);
    dialogRef.showModal();
    setDialogFocusOnTop();
    dialogRef.classList.add("opened");
}

function closeDialog(galleryIndex) {
    const dialogRef = document.getElementById("pictureDialog");
    dialogRef.classList.remove("opened");
    dialogRef.close();
}

// render previous image and keep focus on next-button
function renderNextImage(currentImageIndex) {
    const next = (currentImageIndex + 1) % pictureGallery.length;
    renderModalContent(next);
    setDialogFocusOnNext();
}

// render previous image and keep focus on previous-button
function renderPreviousImage(currentImageIndex) {
    const previous = (currentImageIndex - 1 + pictureGallery.length) % pictureGallery.length;
    renderModalContent(previous);
    setDialogFocusOnPrevious();
}

// render content of dialog from existing content
function renderModalContent(currentImageIndex) {
    const label = getTrimmedLabel(currentImageIndex);
    const modalHeadRef = document.getElementById("modalHead");
    modalHeadRef.innerHTML = getModalHeadContent(label);

    const dialogPictureRef = document.getElementById("dialogPicture");
    dialogPictureRef.innerHTML = getModalPictureContent(currentImageIndex);

    const modalNavRef = document.getElementById("modalNav");
    modalNavRef.innerHTML = getModalNavigationContent(currentImageIndex);
}

// remove file-ending and underscores
function getTrimmedLabel(galleryIndex) {
    return pictureGallery[galleryIndex].file.replace(/\.[^/.]+$/, "").replace("_", " ");
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
