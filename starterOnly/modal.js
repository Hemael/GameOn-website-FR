function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const regexs = {
  text: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]*(-)?[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/,
  mail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  nombre: /^[0-9]{1,2}$/,
};

// DOM Elements
// permet de recuperer l'element qui a la classe entre parenthese
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const btn = document.getElementById("submit-btn");
console.log(btn);

// launch modal event
// permet d'attribuer un evenement a un element
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    changeDisplayModal("block");
  })
);
closeBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    changeDisplayModal("none");
  })
);

//fonction qui appel quand l'evenement est declenché
function changeDisplayModal(displayChange) {
  modalbg.style.display = displayChange;
}

function validateForm(e) {
  

  document.querySelectorAll(".error").forEach((p) => p.remove());
  document.querySelectorAll(".errorContour").forEach((p) => p.classList.remove("errorContour"));
  const errors = [];
  const prenom = document.getElementsByName("first")[0];
  const nom = document.getElementsByName("last")[0];
  const adresseMail = document.getElementsByName("email")[0];
  const number = document.getElementsByName("quantity")[0];
  const location = document.querySelector("[name='location']:checked");
  const verification = document.querySelector("#checkbox1");
  const date = document.getElementsByName("birthdate")[0];

  if (prenom.value.length < 2 || !isValid("text", prenom.value)) {
    errors.push("entrez un prénom correct");
    addElement(prenom, "Veuillez entrer 2 caractères ou plus pour le champ du prenom.");
  }

  if (nom.value.length < 2 || !isValid("text", nom.value)) {
    errors.push("entrez un nom correct");
    addElement(nom, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }

  if (!isValid("mail", adresseMail.value)) {
    errors.push("entrez une email correct");
    addElement(adresseMail, "Veuillez entrer une adresse mail correct.");
  }
  if (!isValid("nombre", number.value)) {
    errors.push("entrez une quantitée correct");
    addElement(number, "Veuillez entrer un nombre.");
  }
  if (location == null) {
    errors.push("entrez une location correct");
    addElement(document.querySelector("[id='location1']"), "Vous devez choisir une option."); // car location est null
  }
  if (verification.checked == false) {
    errors.push("acceptez les conditions d'utilisation");
    addElement(verification, "Vous devez vérifier que vous acceptez les termes et conditions.");
  }
  console.log(date.value);
  if (date.value == "") {
    errors.push("entrez une date de naissance correct");
    addElement(date, "Veuillez entrer une date de naissance.");
  }

  if (errors.length > 0) {
    console.log(errors);
   
    //annule le comportement par defaut
    e.preventDefault();
    
  }
}

function isValid(regex, value) {
  return regexs[regex].test(value);
}

function addElement(elementDom, texte) {
  let p = document.createElement("p");
  p.classList.add("error");
  elementDom.classList.add("errorContour");
  p.append(texte);
  elementDom.parentElement.append(p);
}

