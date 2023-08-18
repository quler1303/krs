document.addEventListener("DOMContentLoaded", () => {

const obrot = document.querySelector("#obrot");
const elementDiv = document.querySelector('div');

const body = document.querySelector('body');

let licznikOdliczanie = 10;
let licznik = 0;
let krok = 36;

obrot.addEventListener('click', ()=>{
    setInterval(() => {
    elementDiv.style.transform = "rotate"+licznik+"deg)";
    elementDiv.innerHTML = `<p style="color:white;font-size:200px;font-weight:bold">${licznikOdliczanie}</p>`
    licznikOdliczanie -=1;
    if(licznikOdliczanie == 0){
        licznikOdliczanie = 10;
    }

    licznik += krok;

},1000);


});

});