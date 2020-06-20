//Funcion Constructora
function GabyModal(modalId) {
  this.modalId = modalId;
  this.init = function () {
    const questions = document.querySelectorAll(".question");

    // Click function for show the Modal
    document.querySelectorAll(".show").forEach((e) => {
      e.addEventListener("click", function () {
        document.querySelector(".mask").classList.add("active");
      });
    });

    // Function for close the Modal
    function closeModal() {
      document.querySelector(".mask").classList.remove("active");
    }

    // Call the closeModal function on the clicks/keyboard
    let list = document.querySelectorAll(".close, .mask");
    list.forEach((e) => {
      e.addEventListener("click", function () {
        closeModal();
      });
    });

    document.addEventListener("keyup", function (e) {
      if (e.keyCode == 27) {
        closeModal();
      }
    });
  };
}

let gabyModal = new GabyModal("Accordion1");
gabyModal.init();
