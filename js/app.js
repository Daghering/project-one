// 1.Grabbing the email form by id
const emailForm = document.getElementById("email-valid");
    
    // 2.Adding the event listener to the submit button
    emailForm.addEventListener("submit", function (event) {
        event.preventDefault()
        //When clicked below with execute.
        //3.Grabbing the text box.
        const textBox = document.getElementById("emailInput");
        
        //4.Taking the data (the email string) from the text box.
        const formData = textBox.value;
        console.log(formData);
        
        if(IsEmailValid(formData)){
            alert("Thanks for subscribing!");
        }else{
            alert("Please enter a valid email!")
        }
    })
    function HasSpecialCharacter(input) {
        const specialCharacters = ["@", ".com", ".ca", ".co.uk", "gmail", "yahoo"]
        for (let i = 0; i < specialCharacters.length; i++) {
            if (input.indexOf(specialCharacters[i]) > - 1) {
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














