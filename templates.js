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

function getDialogContent(index) {
    return /*html*/ `
        <section aria-description="dialog window for bigger view of image" class="dialog-content-wrapper" 
            onclick="stopDialogPropagation(event)">
            ${getModalHeadWrapper(index)}
            ${getModalPictureWrapper(index)}
            ${getModalNavigationWrapper(index)}
        </section>
    `;
}

function getModalHeadWrapper(index) {
    return /*html*/ `
        <header id="modalHead" class="modal-head-close">
            ${getModalHeadContent(index)}
        </header>
    `;
}

function getModalHeadContent(index) {
    // remove with RE: start by '.' that is not followed by '/' or '.' until EOS
    // then replace all underscores with spaces, e.g. "enduro_1.jpg" -> "enduro 1"
    const label = fotoGallery[index].file.replace(/\.[^/.]+$/, "").replace("_", " ");

    return /*html*/ `
        <button aria-controls="pictureDialog" aria-details="close dialog" id="dialogClose" class="close-button"
            onclick="closeDialog()" tabindex="-1">
        </button>
        <h2>${label}</h2>
    `;
}

function getGalleryPicture(index) {
    return /*html*/ `
        <button aria-description="thumbnail to open big view of image" class="picture-button" 
            onclick="openDialog(${index})" tabindex="0" >
            <img class="picture" src=${pathgToGallery + fotoGallery[index].file} 
                alt="${fotoGallery[index].alt}" 
            />
        </button>
        `;
}

function getModalPictureWrapper(index) {
    return /*html*/ `
        <section id="dialogPicture" class="dialog-picture-wrapper">
            ${getModalPicture(index)}
        </section>
    `;
}

function getModalPicture(index) {
    return /*html*/ `
        <img class="dialog-picture" src=${pathgToGallery + fotoGallery[index].file} alt="${fotoGallery[index].alt}"/>
    `;
}

function getModalNavigationWrapper(index) {
    return /*html*/ `
        <nav id="modalNav" class="modal-nav">
            ${getModalNavigationContent(index)}
        </nav>      
    `;
}

function getModalNavigationContent(index) {
    return /*html*/ `
        <button aria-controls="dialogPicture" aria-details="arrow left" id="dialogPrevious" class="arrow-button-left" 
            onclick="renderPreviousImage(${index})" tabindex="0">
            <div aria-hidden="true"></div>
        </button>
        <p aria-details="current image index">${index + 1} / ${fotoGallery.length}</p>
        <button aria-controls="dialogPicture" aria-details="arrow right" id="dialogNext" class="arrow-button-right" 
            onclick="renderNextImage(${index})" tabindex="0">
            <div aria-hidden="true"></div>
        </button>
    `;
}
