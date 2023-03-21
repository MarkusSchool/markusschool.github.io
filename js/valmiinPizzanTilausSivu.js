document.addEventListener("DOMContentLoaded", function () {
    Maara(null);
});

//päivitetään lukumäärä
function Maara(pizzaNro){
        if(pizzaNro === null){
            localStorage.setItem('pizza1Kpl', 0);
            localStorage.setItem('pizza2Kpl', 0);
            localStorage.setItem('pizza3Kpl', 0);
            localStorage.setItem('pizza4Kpl', 0);
            localStorage.setItem('pizza5Kpl', 0);
            localStorage.setItem('pizza6Kpl', 0);
            localStorage.setItem('pizza7Kpl', 0);
            localStorage.setItem('pizza8Kpl', 0);
        }else
        if(localStorage.getItem(pizzaNro) > 0){
            document.getElementById(pizzaNro).innerHTML = localStorage.getItem(pizzaNro);
        }else{
            document.getElementById(pizzaNro).innerHTML = '0';
        }
}
//lisätään valitun pizzan lukumäärää
function LisaaPizza(pizzaNro){
    localStorage.setItem(pizzaNro, Number(localStorage.getItem(pizzaNro)) + 1);
    console.log(localStorage.getItem(pizzaNro));
    Maara(pizzaNro);
}
//vähennetään valitun pizzan lukumäärää
function VahennaPizza(pizzaNro){
    if(localStorage.getItem(pizzaNro) > 0){
        localStorage.setItem(pizzaNro, Number(localStorage.getItem(pizzaNro)) - 1);
    }
    Maara(pizzaNro);
}