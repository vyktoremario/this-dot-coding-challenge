let selectedThumbnail;

function onThumbnailSelect(index) {
  let thumbnail = document.querySelector(`#thumbnail-${index}`);
  let bigImage = document.querySelector("#lightbox-image");

  if (!selectedThumbnail) {
    selectedThumbnail = document.querySelector("#thumbnail-1");
  }

  if (thumbnail) {
    selectedThumbnail.classList.toggle("selected");
    thumbnail.classList.toggle("selected");
    bigImage.src = `/images/image-product-${index}.jpg`;
    selectedThumbnail = thumbnail;
  }
}

let cartCount = 0;
const addToCartButton = document.querySelector(".add-to-cart");
const counter = document.querySelector(".counter");
const renderCartCount = () => {};
const inc = document.querySelector(".increment");
const dec = document.querySelector(".decrement");

addToCartButton.addEventListener("click", () => {
  const counterVal = Number.parseInt(counter.value, 10);
  if (!Number.isNaN(counterVal)) {
    cartCount += Number.isNaN(counterVal);
    renderCartCount();
  }
});

inc.addEventListener(() => {});
renderCartCount();
