let id;
id = setTimeout(() => {
    alert("Otp Sent to Your gmail.");
}, 3000);

let user_email = localStorage.getItem("user_email");
let display = document.getElementById('email_data');
display.append(user_email);

let verifyFun = async () => {
    let otp = document.getElementById('otp').value;

    if (otp == 8400) {
        window.location.href = "userdetails.html";
    } else {
        alert("Invalid OTP!")
    }


}
document.getElementById('verify').addEventListener("click", verifyFun);