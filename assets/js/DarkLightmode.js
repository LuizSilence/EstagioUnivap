const wra = document.querySelector("[name=section]");
const toggle = document.querySelector("[name=toggle]");
var teste = 1;

toggle.onclick = function () {
    if (teste === 1) {
        document.body.style.transition = "0.5s";
        document.body.style.background = "#100c08";

        teste++;
    } else {
        document.body.style.transition = "0.5s";
        document.body.style.background = "#f8f9fa";
        teste--;
    }

    wra.classList.toggle("dark");
};
