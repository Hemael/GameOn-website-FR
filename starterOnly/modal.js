function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", () => {changeDisplayModal("block")}));
closeBtn.forEach((btn) => btn.addEventListener("click", () => {changeDisplayModal("none")}));


function changeDisplayModal(displayChange){
  console.log(modalbg.style.display);
  modalbg.style.display = displayChange;
}


function validate(e){
  let errors = [];
  let prenom = document.getElementsByName("first")[0].value;
  let nom = document.getElementsByName("last")[0].value;

  if(prenom.length < 2){
    errors.push("entrez un prénom correct")
  }
  if(nom.length < 2){
    errors.push("entrez un nom correct")
  }
  if(errors.length > 0){
    e.preventDefault();
  }
  
  

}



















// // launch modal form
// function launchModal() {
//   modalbg.style.display = "block";
// }

// function closeModal() {
//   modalbg.style.display = "none";
//}