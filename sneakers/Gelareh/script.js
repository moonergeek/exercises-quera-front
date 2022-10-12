//================= burger navbar ===================
const openNav = () => {
  const links = document.querySelector(".navbar__links");
  const closeNav = document.querySelector(".navbar__close");
  links.style.display = "flex";
  closeNav.style.display = "block";
  links.classList.add("navbar__links--100h");
};
const closeNav = () => {
  const links = document.querySelector(".navbar__links");
  const closeNav = document.querySelector(".navbar__close");
  links.style.display = "none";
  closeNav.style.display = "none";
};

//================= show images ===================
const showImage = (elem) => {
  const selectedImage = document.querySelector(".images__tumbnail--active");
  selectedImage.classList.remove("images__tumbnail--active");
  elem.classList.add("images__tumbnail--active");
  const imageName = elem.src.replace("-thumbnail", "");
  const mainImage = elem.parentElement.previousElementSibling.firstElementChild;
  mainImage.src = imageName;
};

//================= next and previous image ===================
const nextImage = (elem) => {
  const mainImage = elem.parentElement.previousElementSibling;
  const imageNumber = +mainImage.src.substr(-5, 1);
  let newImageNumber;
  if (imageNumber > 3) {
    newImageNumber = 1;
  } else {
    newImageNumber = imageNumber + 1;
  }
  const newSrc = mainImage.src.replace(imageNumber, newImageNumber);
  mainImage.src = newSrc;
};
const prevImage = (elem) => {
  const mainImage = elem.parentElement.previousElementSibling;
  const imageNumber = +mainImage.src.substr(-5, 1);
  let newImageNumber;
  if (imageNumber < 2) {
    newImageNumber = 4;
  } else {
    newImageNumber = imageNumber - 1;
  }
  const newSrc = mainImage.src.replace(imageNumber, newImageNumber);
  mainImage.src = newSrc;
};

//================= add and remove from cart ===================
let counter = document.querySelector(".counter").innerHTML;
const cartNumber = document.querySelector(".cart__number");
const cartProductList = document.querySelector(".cart__body__text");
const cartButton = document.querySelector(".cart__button");
const cartbody = (elem) => {
  const selectedProduct = elem.parentElement.parentElement.parentElement;
  const selectedProductTitle = selectedProduct.children[1].innerHTML;
  const selectedProductPrice =
    selectedProduct.children[3].firstElementChild.firstElementChild.innerHTML;
  totalPrice = counter * selectedProductPrice.substring(1);
  const cartItem = `<div class="cart__details"> <img class="cart__details__image" src="../images/image-product-1-thumbnail.jpg" alt="productImage" width="50px">
  <div class="details__description"><div class="details__title">${selectedProductTitle} ${selectedProductPrice} x ${counter} <span class="details__price--bold">$${totalPrice}.00<span></div><img src="../images/icon-delete.svg" class="delete__cart" width="12px" onclick="deleteFromCart()"></div></div>`;
  cartProductList.innerHTML = cartItem;
  cartButton.style.display = "block";
};
const deleteFromCart = () => {
  const cartDetails = document.querySelector(".cart__details");
  cartDetails.innerHTML = "";
  document.querySelector(".counter").innerHTML = 0;
  cartButton.style.display = "none";
  cartNumber.style.display = "none";
  cartProductList.innerHTML = `<p>Your cart is empty.</p>`;
};
const addToCart = (elem) => {
  cartNumber.style.display = "block";
  counter = +counter + 1;
  cartNumber.innerHTML = counter;
  document.querySelector(".counter").innerHTML = counter;
  cartbody(elem);
};

const removeFromCart = (elem) => {
  if (counter > 0) {
    counter = +counter - 1;
  } else {
    counter = 0;
  }
  if (counter <= 0) {
    cartNumber.style.display = "none";
    cartProductList.innerHTML = `<p>Your cart is empty.</p>`;
  }
  cartNumber.innerHTML = counter;
  document.querySelector(".counter").innerHTML = counter;
  cartbody(elem);
};

//================= open basket shopping cart ===================
const cart = document.querySelector(".cart");
const cartList = () => {
  if (cart.style.display == "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }
};

//================= open modal ===================
const modal = document.querySelector(".productModal");
const close = document.querySelector(".modal__close");
const modalMainImage = document.querySelector(".main__image__modal");
const arrowbuttons = document.querySelector(".main__slides__modal");
const mediaQuery = window.matchMedia("(min-width: 576px)");
const openModal = (src) => {
  if (mediaQuery.matches) {
    modal.style.display = "block";
    modalMainImage.src = src;
    arrowbuttons.style.display = "flex";
  }
};
close.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
