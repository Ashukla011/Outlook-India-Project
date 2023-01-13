import header from "../components/header.js";
import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import bottomDiv from "../components/bottomdiv.js";

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('logo_section').innerHTML = header();
document.getElementById('container').innerHTML = footer();
document.getElementById("bottom").innerHTML = bottomDiv();


let user_number = 123456789;

let signUpFun = async (e) => {
    e.preventDefault();
    let phone = document.getElementById('phone_sd').value;
    console.log(phone);
    let Password = document.getElementById('passoword_sd').value;
    console.log(Password);

    if (phone != user_number || Password != 1234) {
        alert("Invalid Phone Number & Password");
    } else {
        alert("Welcome To Outlook India!")

        // home page location put here
        window.location.href = "index.html";
    }
}
document.getElementById('signup').addEventListener("click", signUpFun);

let date = new Date();
let cday = date.getDay();
let cdate = "0" + date.getDate();
let month = date.getMonth();
let cyear = date.getFullYear();

let day = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

for (let i = 0; i < day.length; i++) {
    if (i == (+cdate)) {
        cday = day[i - 1];
    }
}

let arr = ["January", "February", "March", "April", "May", "Jun", "July", "August",
    "September", "October", "November", "December"];
for (let i = 0; i < arr.length; i++) {
    if (i == (+month)) {
        month = arr[i];
    }
}

document.getElementById('date').append(cday + " " + month + " " + cdate + " " + cyear);