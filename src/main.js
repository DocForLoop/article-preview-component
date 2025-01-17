import './scss/style.scss';

const button = document.getElementById("share-btn");
const activeButton = document.getElementById("share-btn--active");
const shareOptions = document.getElementById("share-options");
const footer = document.querySelector(".article__footer");

const isMobile = () => window.matchMedia("(max-width: 808px)").matches;

const toggleShareOptions = () => {
    shareOptions.classList.toggle("show");
    if(isMobile()) {
        footer.classList.toggle("hide");
    }
}

const removeShareOptions = () => {
    shareOptions.classList.remove("show");
    footer.classList.remove("hide");
}

button.addEventListener("click", toggleShareOptions);
activeButton.addEventListener("click", toggleShareOptions);

window.addEventListener("resize", removeShareOptions);

document.addEventListener("click", (e) => {
    if (!button.contains(e.target) && !shareOptions.contains(e.target)) {
        removeShareOptions();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        removeShareOptions();
    }
});