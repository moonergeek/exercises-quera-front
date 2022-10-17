// elements
const navItems = document.querySelectorAll(".nav-item"),
smallImgItems = document.querySelectorAll(".page"),
largeImgCardInPage = document.querySelector("#largeImgCardInPage"),
largeImgCardInMobile = document.querySelector("#largeImgCardInMobile"),
addNumberSpan = document.querySelector("#minusPlus"),
badge =  document.querySelector(".group badge"),
result = document.querySelector("#result"),
modalSmallImgDiv = document.querySelector(".modal-small-img"),
largeImgCardInModal = document.querySelector("#largeImgCardInModal"),
sold = document.querySelector("#sold");
modalCartBody = document.querySelector("#modal-body-cart"),
cartIcon = document.querySelector("#navBarCartIcon"),
numberIcon= document.querySelector("#group");


let largeImgInPage = largeImgCardInPage.children[0],
badgeIcon = document.createElement("span");
badgeIcon.setAttribute("class", "badge badge-light rounded-circle translate-middle")

//borderBottom for each items of Navbar
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((li) =>{ 
    if (li.getAttribute("style")== "border-bottom: 4px solid rgba(247, 113, 4, 0.925);"){
      li.setAttribute("style" ,"none")
    } 
  })
    item.setAttribute("style" ,"border-bottom: 4px solid rgba(247, 113, 4, 0.925);")
  })
})

// *function for create large Image by id of small Images
const getImgEvent = (array, cardImg, place) => {
  array.forEach((item) => {
    item.addEventListener("click", () => {
      let imgId = item.id.split("-")[0]
      cardImg.innerHTML = ""
      cardImg.innerHTML = `
        <img class="card-img-large-page w-100 h-100" id="${imgId}-large-${place}" src="./sneakers/images/image-product-${imgId}.jpg" alt="Card image">
        `
    })
  })
}

//call *function
getImgEvent(smallImgItems, largeImgCardInPage, "page")

// return Large image for Modal
const setLargeImgModal = (image) => {
  largeImgCardInModal.innerHTML = ""
  let largeImgModalId = image.id.split("-")[0]
  largeImgCardInModal.innerHTML = `
    <img class="card-img-large-page w-100 h-100" id="${largeImgModalId}-modal" src="./sneakers/images/image-product-${largeImgModalId}.jpg" alt="Card image">
    `
}

// set small Images for Modal
const setSmallImgModal = () => {
  modalSmallImgDiv.innerHTML = ""
  smallImgItems.forEach((item) =>{
    let smallImgCloneId= item.id.split("-")[0]
    let smallImgClone = document.createElement("img")
    smallImgClone.setAttribute("class", "clone-small-img")
    smallImgClone.setAttribute("id", `${smallImgCloneId}-small-modal`)
    smallImgClone.setAttribute("src", `./sneakers/images/image-product-${smallImgCloneId}-thumbnail.jpg`)
    modalSmallImgDiv.append(smallImgClone) 
  })
}

// onClick large Image
const getModalPage = () => { 
  setLargeImgModal(largeImgInPage)
  setSmallImgModal() 
  let smallImgInModal = document.querySelectorAll(".clone-small-img")
  console.log(modalSmallImgDiv)
  //call *function for modal
  getImgEvent(smallImgInModal, largeImgCardInModal, "modal")
}

//set Modal in mobile state
const getModalMobile = () => {
  let largeImg = largeImgCardInMobile.children[0]
  setLargeImgModal(largeImg)
}

// clickOn next icon in Modal for large Image click in desktop state
const getNextImgModal = () => {
  const nextCloneImg = largeImgCardInModal.children[0]
  const nextCloneImgId = nextCloneImg.id.split("-")[0]
  largeImgCardInModal.innerHTML = ""
  if (nextCloneImgId < 4) {
    largeImgCardInModal.innerHTML = `
          <img class="card-img-large-modal w-100 h-100" id=${parseInt(nextCloneImgId)+1}-modal src="./sneakers/images/image-product-${parseInt(nextCloneImgId)+1}.jpg" alt="Card image">
          `
  }else if (nextCloneImgId == 4) {
    largeImgCardInModal.innerHTML = `
      <img class="card-img-large-modal w-100 h-100" id=1-modal src="./sneakers/images/image-product-1.jpg" alt="Card image">
      `
  }  
}
 
// clickOn pervious icon in Modal for large Image click in desktop state
const getPreviousImgModal = () => {
  const perviousCloneImg = largeImgCardInModal.children[0]
  const perviousCloneImgId = perviousCloneImg.id.split("-")[0]
  largeImgCardInModal.innerHTML = ""
  if (perviousCloneImgId > 1) {
    largeImgCardInModal.innerHTML = `
      <img class="card-img-large-modal w-100 h-100" id=${parseInt(perviousCloneImgId)-1}-modal src="./sneakers/images/image-product-${parseInt(perviousCloneImgId)-1}.jpg" alt="Card image">
      `
  }else if (perviousCloneImgId == 1) {
    largeImgCardInModal.innerHTML = `
      <img class="card-img-large-modal w-100 h-100" id="4-modal" src="./sneakers/images/image-product-1.jpg" alt="Card image">
      `
  }
}

// clickOn next icon in Modal for large Image click in mobile state
const getNextImgMobile = () => {
  const nextCloneImg = largeImgCardInMobile.children[0]
 const nextCloneImgId = nextCloneImg.id.split("-")[0]
 largeImgCardInMobile.innerHTML = ""
 if (nextCloneImgId < 4) {
  largeImgCardInMobile.innerHTML = `
         <img class="mobile card-img largeMob w-100 h-100" id=${parseInt(nextCloneImgId)+1}-mobile src="./sneakers/images/image-product-${parseInt(nextCloneImgId)+1}.jpg" alt="Card image">
         `
 }else if (nextCloneImgId == 4) {
  largeImgCardInMobile.innerHTML = `
     <img class="mobile card-img largeMob w-100 h-100" id=1-mobile src="./sneakers/images/image-product-1.jpg" alt="Card image">
     `
 }  
}

// clickOn pervious icon in Modal for large Image click in mobile state
const getPerviousImgMobile = () => {
 const perviousCloneImg = largeImgCardInMobile.children[0]
 const perviousCloneImgId = perviousCloneImg.id.split("-")[0]
 largeImgCardInMobile.innerHTML = ""
 if (perviousCloneImgId > 1) {
  largeImgCardInMobile.innerHTML = `
     <img class="mobile card-img largeMob w-100 h-100" id=${parseInt(perviousCloneImgId)-1}-mobile src="./sneakers/images/image-product-${parseInt(perviousCloneImgId)-1}.jpg" alt="Card image">
     `
 }else if (perviousCloneImgId == 1) {
  largeImgCardInMobile.innerHTML = `
     <img class="mobile card-img largeMob w-100 h-100" id="4-mobile" src="./sneakers/images/image-product-1.jpg" alt="Card image">
     `
 }
}

//clickOn Minus icon for reduce product
const getMinus = () => {
  let number = addNumberSpan.innerHTML
  let numberInt = parseInt(number)
  addNumberSpan.innerHTML = ""
  addNumberSpan.innerHTML = (numberInt > 0 ? parseInt(numberInt) -1 : 0)
}

//clickOn plus icon for add product
const getPlus = () => {
  let number = addNumberSpan.innerHTML
  let numberInt = parseInt(number)
  addNumberSpan.innerHTML = ""
  addNumberSpan.innerHTML = parseInt(numberInt) + 1
}

//set Modal for cart by clickOn Add to cart button in desktop state
const addProductToCartDesktop = () => {
  let selectedImgId = largeImgInPage.id.split("-")[0]
  console.log(selectedImgId );
  let selectedImg = document.getElementById(`${selectedImgId}-small-page`)
  let number = addNumberSpan.innerHTML
  
  if (parseInt(number) != 0) {
    let result = sold.innerHTML.replace("$", "").trim()
    let sale = parseInt(number) * parseInt(result)
    let cartModalBodyInner = `
      <div id="cart-body">
        <div id="saleSpan">
          <span id="titleCart">Fall Limited Edition Sneakers</span>
          <span id="result">${sold.innerHTML} * ${addNumberSpan.innerHTML}  <b>$${sale}</b></span>
        </div>
        <i><img src="./sneakers/images/icon-delete.svg" onclick=deleteProducts()></i>
      </div>
      
      `
    modalCartBody.innerHTML = cartModalBodyInner
    badgeIcon.innerHTML = ""
    badgeIcon.innerHTML = addNumberSpan.innerHTML
    numberIcon.append(badgeIcon)
    let cart = document.querySelector("#cart-body")
    cart.prepend(selectedImg.cloneNode(true))

  }
}

//set Modal for cart by clickOn Add to cart button in mobile state
const addProductToCartMobile = () => {
  let largeImgInPage = largeImgCardInMobile.children[0];
  let selectedImgId = largeImgInPage.id.split("-")[0]
  console.log(selectedImgId );
  let smallImgClone = document.createElement("img")
  smallImgClone.setAttribute("id", `${selectedImgId}-small-cart`)
  smallImgClone.setAttribute("class", "small-cart-img")
  smallImgClone.setAttribute("src", `./sneakers/images/image-product-${selectedImgId}-thumbnail.jpg`)
  let number = addNumberSpan.innerHTML
  
  if (parseInt(number) != 0) {
    let result = sold.innerHTML.replace("$", "").trim()
    let sale = parseInt(number) * parseInt(result)
    let cartModalBodyInner = `
      <div id="cart-body">
        <div id="saleSpan">
          <span id="titleCart">Autumn Limited Edition...</span>
          <span id="result">${sold.innerHTML} * ${addNumberSpan.innerHTML}  <b>$${sale}</b></span>
        </div>
        <i><img src="./sneakers/images/icon-delete.svg" onclick=deleteProducts()></i>
      </div>
      
      `
    modalCartBody.innerHTML = cartModalBodyInner
    badgeIcon.innerHTML = ""
    badgeIcon.innerHTML = addNumberSpan.innerHTML
    numberIcon.append(badgeIcon)
  let cart = document.querySelector("#cart-body")
  console.log(cart);
  cart.prepend(smallImgClone)
}
}

//clickOn checkOut button in cart modal
const saveChange =  () => {
  if (modalCartBody.innerHTML == "") {
    addNumberSpan.innerHTML = ""
    addNumberSpan.innerHTML = 0
    badgeIcon.remove()
  }
}

//clickOn delete icon in cart modal
const deleteProducts = () => {
  modalCartBody.innerHTML = ""
}
