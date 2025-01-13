import './scss/style.scss';

const button = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");
const activeButton = document.getElementById("share-btn--active");
const footer = document.querySelector(".article__footer");

button.addEventListener("click", () => {
    shareOptions.classList.toggle("show");
    footer.classList.toggle("hide");
});

activeButton.addEventListener("click", () => {
    shareOptions.classList.toggle("show");
    footer.classList.toggle("hide");
});