let verifyfun = async () => {
    let input = document.getElementById("email").value;
    console.log(input);

    if (input == "") {
        alert("Enter Your Email")
    } else {

        window.location.href = "otp.html";
        localStorage.setItem("user_email", input);
    }

}
document.getElementById("verify").addEventListener("click", verifyfun);