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


function validate(event){
  event.preventDefault();
  let errors = [];
  let prenom = document.getElementsByName("first")[0].value;
  let nom = document.getElementsByName("last")[0].value;
  
  console.log(event.target[5].value);
  console.log(event.target.getAttribute("name"))

  if(prenom.length < 2){
    errors.push("entrez un prénom correct")
  }
  if(nom.length < 2){
    errors.push("entrez un nom correct")
  }
  if(errors.length > 0){
    
  }

}

function isValid(value) {
  return /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]*(-)?[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/.test(value);
  
}

//console.log(isValid("Hénêl1"))















// // launch modal form
// function launchModal() {
//   modalbg.style.display = "block";
// }

// function closeModal() {
//   modalbg.style.display = "none";
//}