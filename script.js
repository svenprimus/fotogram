const pathgToGallery = "./assets/img/gallery/";
const fotoGallery = [
    "bochum.jpg",
    "child_vacation.jpg",
    "enduro_0.jpg",
    "enduro_1.jpg",
    "enduro_2.jpg",
    "enduro_3.jpg",
    "enduro_4.jpg",
    "first_kiss.jpg",
    "fishing_0.jpg",
    "fishing_1.jpg",
    "jump.jpg",
    "lagoon.jpg",
    "miamm.jpg",
    "no_wacken.jpg",
    "padel.jpg",
    "sailing.jpg",
];

function renderGallery() {
    const galleryRef = document.getElementById("gallery");
    galleryRef.innerHTML = "";
    for (let i = 0; i < fotoGallery.length; i++) {
        galleryRef.innerHTML += /*html*/ `
            <img class="picture" onclick="openDialog(${i})" src=${pathgToGallery + fotoGallery[i]} alt="${fotoGallery[i]}"/>
        `;
    }
}
const dialogRef = document.getElementById("pictureDialog");

function openDialog(galleryIndex) {
    // TODO cut file extension
    const label = fotoGallery[galleryIndex];

    dialogRef.innerHTML = /*html*/ `
        <div class="dialog-content-wrapper">
            <div class="modal-head-close">
                <img onclick="closeDialog()" src="./assets/icon/icon-close-default.svg" alt="close-button"/>
                <h2>${label}</h2>
            </div>
            

            <img class="dialogPicture" src=${pathgToGallery + fotoGallery[galleryIndex]} alt="${fotoGallery[galleryIndex]}"/>
            <div class="modal-nav"></div>
        </div>
    `;
    dialogRef.showModal();
}

function closeDialog(galleryIndex) {
    dialogRef.close();
}
