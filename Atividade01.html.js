const elementoForm = document.getElementById("formulario");
elementoForm.addEventListener("submit", (e) => e.preventDefault());


const elementoColor = document.getElementById("color");
elementoColor.addEventListener("input", (e) => {
     let corNova = e.target.value;

     localStorage.setItem("primaryColor", corNova);

    document.documentElement.style.setProperty("--primary-color", corNova);
});

document.addEventListener("DOMContentLoaded", () =>
{
    if (localStorage.getItem("primaryColor")){
        elementoColor.value = localStorage.getItem("primaryColor");

        document.documentElement.style.setProperty("--primary-color", elementoColor.value);
    } else {

   const rootStyle = window.getComputedStyle(document.documentElement);

   const  primaryColor = rootStyle.getPropertyValue("--primary-color").trim();

   elementoColor.value = primaryColor;

    }
});