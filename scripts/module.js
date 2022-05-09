import navbar from "../components/navbar.js";
import header from "../components/header.js";
import footer from "../components/footer.js";
import bottomDiv from "../components/bottomdiv.js";

document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("#logo_section").innerHTML=header();
document.querySelector("#container").innerHTML=footer();
document.querySelector("#bottom").innerHTML=bottomDiv();