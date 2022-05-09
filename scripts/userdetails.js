let user_mail = localStorage.getItem("user_email");

let email = document.getElementById('email');
email.value = user_mail;
let mail = document.getElementById('mail');
mail.value = user_mail;

let id;

let confirmFun = async () => {
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;

    if (name === "" || number === "") {
        alert("Please Enter Details");

    } else {
        localStorage.setItem("number", number);
    }

}
document.getElementById('confirm').addEventListener("click", confirmFun);
let key = document.querySelector("#number");
key.addEventListener("keydown", () => {

    id = setTimeout(() => {
        let number1 = document.getElementById('number').value;
        let number = document.getElementById('user_number');
        number.value = number1;
        // console.log(number1);
        
    }, 1000);
    
})

let payFun = async () => {
    alert(" Payment Sucessfull!");

    window.location.href = "signin.html";
}
document.getElementById('pay').addEventListener("click", payFun);
