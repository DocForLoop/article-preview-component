import './scss/style.scss';

const button = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");
const activeButton = document.getElementById("share-btn--active");
const footer = document.querySelector(".article__footer");
const isMobile = () => window.matchMedia("(max-width: 808px)").matches;

button.addEventListener("click", () => {
    if(isMobile()) {
        shareOptions.classList.toggle("show");
        footer.classList.toggle("hide");
    }else {
        shareOptions.classList.toggle("show");
    }
    
});

activeButton.addEventListener("click", () => {
    if(isMobile()) {
        shareOptions.classList.toggle("show");
        footer.classList.toggle("hide");
    }
});

window.addEventListener("resize", () => {
    if (isMobile()) {
        shareOptions.classList.remove("show");
        footer.classList.remove("hide");
    } else {
        shareOptions.classList.remove("show");
        footer.classList.remove("hide");
    }
});

document.addEventListener("click", (e) => {
    if (
        !button.contains(e.target) && !shareOptions.contains(e.target)
    ) {
        shareOptions.classList.remove("show");
        if (isMobile()) {
            footer.classList.remove("hide");
        }
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        shareOptions.classList.remove("show");
        if  (isMobile()) {
            footer.classList.remove("hide");
        }
    }
});