import { Modal } from "bootstrap";
import { logToHome } from "../main";

// window.onload = function () {
document.getElementById("log").addEventListener("click", logToHome);

var forms = document.querySelectorAll(".needs-validation");

console.log(forms);

// Loop over them and prevent submission

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
//};
