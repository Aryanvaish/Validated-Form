
const signUpCta = document.getElementsByClassName('signUpCta')[0];
console.log(signUpCta);


const tnc = document.getElementById('tnc');


tnc.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && tnc.checked == false) {
        tnc.checked = true;
    } else if (event.key === "Enter" && tnc.checked == true) {
        tnc.checked = false;
    }
});



signUpCta.addEventListener("click", function (e) {
    // e.preventDefault();


    const passwordInp = document.getElementsByClassName('passwordInp')[0].value;
    const ConfirmPass = document.getElementsByClassName('ConfirmPass')[0].value;
    console.log(passwordInp, "passwordInp", ":", ConfirmPass, "ConfirmPass");


    if (passwordInp !== ConfirmPass) {
        alert("Passwords are not same..");
    }

    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

});



