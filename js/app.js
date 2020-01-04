
const emailForm = document.getElementById("email-valid");


emailForm.addEventListener("submit", function(event) {
  event.preventDefault();
  

  
  const textBox = document.getElementById("emailInput");

  
  const formData = textBox.value;
  console.log(formData);

  if (IsEmailValid(formData)) {
    alert("Thanks for subscribing!");
  } else  {
    alert("Please enter a valid email!");
  }
});

function HasSpecialCharacter(input) {
  const specialCharacters = ["@", ".com", ".ca", "gmail", "yahoo", "hotmail"];
  for (let i = 0; i < specialCharacters.length; i++) {
    if (input.indexOf(specialCharacters[i]) > -1) {
      return true;
    }
  }
}
function IsEmailValid(input) {
  if (HasSpecialCharacter(input)) {
    return true;
  } else {
    return false;
  }
}



// Cart Badge Counter
const cart = document.querySelectorAll(".btn");
const cartNumber = document.getElementById("counter");
const shoppingCart = [];

let clicks = 0;

cart.forEach(function(element, index) {
  cart[index].addEventListener("click", function add(event) {
    clicks += 1
    cartNumber.innerHTML = clicks
  })
})

      







