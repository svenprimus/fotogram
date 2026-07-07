const pathgToGallery = "./assets/img/gallery/";
const fotoGallery = [
    { file: "bochum.jpg", alt: "Couple in front of VfL Bochum Stadium" },
    { file: "child_vacation.jpg", alt: "Child working with coal during its holidays" },
    { file: "child_moto.jpg", alt: "Child driving mini motorcycle with its aunt" },
    { file: "enduro_1.jpg", alt: "Enduro motorcyclist in terrain" },
    { file: "enduro_2.jpg", alt: "Enduro motorcyclist in the forest" },
    { file: "enduro_3.jpg", alt: "Enduro motorcyclist in the hill" },
    { file: "enduro_4.jpg", alt: "Enduro motorcyclist below a waterfall" },
    { file: "first_kiss.jpg", alt: "Two babies kissing each other" },
    { file: "fishing_0.jpg", alt: "Little child fishing with family" },
    { file: "fishing_1.jpg", alt: "Adult posing with big catfish" },
    { file: "jump.jpg", alt: "Middle of jump into a swimming pool" },
    { file: "lagoon.jpg", alt: "Drone picture from the sky of a party on a dock of a lagoon" },
    { file: "miamm.jpg", alt: "Adult easting cake with passion" },
    { file: "no_wacken.jpg", alt: "Adult showing metal fork with harmed hand and 'Wacken' shirt" },
    { file: "padel.jpg", alt: "Couples selfie during padel tenis" },
    { file: "sailing.jpg", alt: "Adult controlling huge sailing ship" },
];

function getGalleryPicture(index) {
    return /*html*/ `
            <img class="picture" onclick="openDialog(${index})" src=${pathgToGallery + fotoGallery[index].file} 
                alt="${fotoGallery[index].alt}"
            />
        `;
}

function getDialogContent(index) {
    return /*html*/ `
        <div class="dialog-content-wrapper">
            ${getModalHeadWrapper(index)}
            ${getModalPictureWrapper(index)}
            ${getModalNavigationWrapper(index)}
        </div>
    `;
}

function getModalHeadWrapper(index) {
    return /*html*/ `
        <div id="modalHead" class="modal-head-close">
            ${getModalHeadContent(index)}
        </div>
    `;
}

function getModalHeadContent(index) {
    // remove with RE: start by '.' that is not followed by '/' or '.' until EOS
    // then replace all underscores with spaces, e.g. "enduro_1.jpg" -> "enduro 1"
    const label = fotoGallery[index].file.replace(/\.[^/.]+$/, "").replace("_", " ");

    return /*html*/ `
        <button class="close-button" onclick="closeDialog()"></button>
        <h2>${label}</h2>
    `;
}

function getModalPictureWrapper(index) {
    return /*html*/ `
        <div id="dialogPicture" class="dialog-picture-wrapper">
            ${getModalPicture(index)}
        </div>
    `;
}

function getModalPicture(index) {
    return /*html*/ `
        <img class="dialog-picture" src=${pathgToGallery + fotoGallery[index].file} alt="${fotoGallery[index].alt}"/>
    `;
}

function getModalNavigationWrapper(index) {
    return /*html*/ `
        <div id="modalNav" class="modal-nav">
            ${getModalNavigationContent(index)}
        </div>      
    `;
}

function getModalNavigationContent(index) {
    return /*html*/ `
        <button class="arrow-button-left" onclick="renderPreviousImage(${index})">
            <div></div>
        </button>
        <p>${index + 1} / ${fotoGallery.length}</p>
        <button class="arrow-button-right" onclick="renderNextImage(${index})">
            <div></div>
        </button>
    `;
}
