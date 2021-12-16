import { Modal } from "bootstrap";
import { logToHome } from "../main";
import { Cart } from "../pages/models/Cart";

let myCart = new Cart();
function createHtml() {
  let priceProduct = 0;

  document.getElementById("productSumering").innerHTML = "";

  for (let i = 0; i < myCart.cartList.length; i++) {
    priceProduct += myCart.cartList[i].game.price * myCart.cartList[i].amount;
    let header: HTMLDivElement = document.createElement("div");
    let image: HTMLDivElement = document.createElement("div");
    let amount: HTMLDivElement = document.createElement("div");
    let imageAmountWrapper: HTMLDivElement = document.createElement("div");
    header.className = "productHeading";
    image.className = "producImage";
    amount.className = "productAmount";
    imageAmountWrapper.className = "imageAmountRapper";

    let gameName: HTMLHeadingElement = document.createElement("h4");
    gameName.innerHTML = myCart.cartList[i].game.name;

    let gameImage: HTMLImageElement = document.createElement("img");
    gameImage.src = myCart.cartList[i].game.image;
    let gamePrice: HTMLParagraphElement = document.createElement("p");
    gamePrice.innerHTML = myCart.cartList[i].game.price + ":-";
    let trashFont = document.createElement("i");
    trashFont.className = "fa fa-trash-o";
    let prodDiv: HTMLDivElement = document.createElement("div");
    let AmountString = myCart.cartList[i].amount.toString();

    let inputAmount: HTMLInputElement = document.createElement("input");
    inputAmount.id = "valueAmount" + (i + 1);
    inputAmount.type = "number";
    inputAmount.value = AmountString;

    inputAmount.addEventListener("blur", () => {
      myCart.addAmount(i);

      createHtml();

      myCart.cartAmountCount();
    });
    trashFont.addEventListener("click", () => {
      myCart.removeIt(i);
      createHtml(); //* -------------------------------------------
    });
    header.appendChild(gameName);
    image.appendChild(gameImage);
    image.appendChild(gamePrice);
    amount.appendChild(inputAmount);
    amount.appendChild(trashFont);
    imageAmountWrapper.appendChild(image);
    imageAmountWrapper.appendChild(amount);
    prodDiv.appendChild(header);
    prodDiv.appendChild(imageAmountWrapper);
    prodDiv.className = "prodDiv";

    document.getElementById("productSumering").appendChild(prodDiv);
  }

  document.getElementById("vafan").innerHTML =
    "Totalpris: " + priceProduct.toString() + ":-";
}

createHtml();

document.getElementById("log").addEventListener("click", logToHome);

var forms = document.querySelectorAll(".needs-validation");

console.log(forms);

Array.prototype.slice
  .call(forms)

  .forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
          let theModal = new Modal(document.getElementById("staticBackdrop"));
          theModal.show();
          console.log("modal kommer inte");
        }

        form.classList.add("was-validated");
      },

      false
    );
  });
