number = 1;
let slideIndex = 1;
var plusBtn = document.getElementById("number");
var minesBtn = document.getElementById("number");
var modal = document.getElementById("modal");
var price = document.getElementById("price").innerHTML;
var storeLenght = document.getElementById("store-number");

const checkEmptyModal = () => {
  if (modal.innerHTML === "") {
    modal.innerHTML = "Cart is Empty";
  }
};
checkEmptyModal();

const plus = () => {
  number = number + 1;
  plusBtn.innerHTML = number;
};

const mines = () => {
  if (number > 1) {
    number = number - 1;
    plusBtn.innerHTML = number;
  }
};

const addCart = () => {
  if (number === 0) {
    storeLenght.innerHTML = 1;
  } else {
    storeLenght.innerHTML = number;
  }
  modal.innerHTML = `
  <img src="/images/image-product-1.jpg" alt="" width="25" />
            Fall Limition Edition Sneakers  ${number === 1 ? "" : "*" + number}
            <div class="modal-footer">
            <button class="btn" id="addBtn" type="button">Checkout</button>
          </div>
  `;
  console.log("work");
};

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("sliders");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
};
showSlides(slideIndex);
