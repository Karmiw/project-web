//-----dom-------

//---------------------Cart-----------------------------------
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-icon");

cartIcon.onclick = () => {
  cart.classList.add("active");
};

closecart.onclick = () => {
  cart.classList.remove("active");
};

//----------------------remove--------------------------------

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var RemoveCartButtons = document.getElementsByClassName("cart-remove");
  console.log(RemoveCartButtons);
  for (var i = 0; i < RemoveCartButtons.length; i++) {
    var button = RemoveCartButtons[i];
    button.addEventListener("click", RemovecartItem);
  }
  var totalInput = document.getElementsByClassName("cart-total");
  for (var i = 0; i < totalInput.length; i++) {
    var input = totalInput[i];
    input.addEventListener("change", totalChange);
  }

  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartItem);
  }

  document
    .getElementsByClassName("b-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

function RemovecartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotals();
}

//-----------------Update-item---------------------------

function totalChange(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotals();
}

function updatetotals() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var totalElement = cartBox.getElementsByClassName("cart-total")[0];
    var price = parseFloat(priceElement.innerText.replace("THB", ""));
    var Totals = totalElement.value;
    total = total + price * Totals;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = "THB" + total;
}

//------------------Add-item----------------------

function addCartItem(event) {
  var button = event.target;
  var item = button.parentElement;
  var title = item.getElementsByClassName("item-title")[0].innerText;
  var price = item.getElementsByClassName("price")[0].innerText;
  var itemImg = item.getElementsByClassName("img-item")[0].src;
  additemTocart(title, price, itemImg);
  updatetotals();
}

function additemTocart(title, price, itemImg) {
  var cartItemBoxs = document.createElement("div");
  cartItemBoxs.classList.add("cart-item-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = document.getElementsByClassName("cart-item-titled");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("U alredy add Item");
      return;
    }
  }

  var cartBoxsContent = ` <div class="cart-box">
  <img src="${itemImg}" alt=" " class="cart-item">
  <div class="detail-box">
      <div class="cart-item-titled">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-total">
  </div>
  <i class='bx bx-trash cart-remove' id= "remove" ></i>`;
  cartItemBoxs.innerHTML = cartBoxsContent;
  cartItems.append(cartItemBoxs);
  cartItemBoxs
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", RemovecartItem);
  cartItemBoxs
    .getElementsByClassName("cart-total")[0]
    .addEventListener("change", totalChange);
}

//-----------------Buy-Popup-Alert------------------------

const openModelButton = document.querySelectorAll("[data-model-target]");
const closeModelButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModelButton.forEach((button) => {
  button.addEventListener("click", () => {
    const model = document.querySelector(button.dataset.modelTarget);
    openModel(model);
  });
});

overlay.addEventListener("click", () => {
  const model = document.querySelectorAll(".model.active");
  model.forEach((model) => {
    closeModel(model);
  });
});

closeModelButton.forEach((button) => {
  button.addEventListener("click", () => {
    const model = button.closest(".model");
    closeModel(model);
  });
});

function openModel(model) {
  model.classList.add("active");
  overlay.classList.add("active");
  return;
}

function closeModel(model) {
  if (model == null) return;
  model.classList.remove("active");
  overlay.classList.remove("active");
}

function buyButtonClicked() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotals();
}

//---------------------------------add

// let count = 0;

// function numpop() {
// const counter = document.getElementById("counter");
// document
//   .getElementById("animation")
//   .addEventListener('click',event => {
//     const cl = counter.classList;
//     const c = "animated-counter";
//     count++;
//     counter.innerText = count;
//     cl.remove(c, cl.contains(c));
//     setTimeout(() => 
//     counter.classList.add("animated-counter"), 
//     1);
//   });
// }
