//Funcion Constructora
function GabyDropDown (dropDownId){
    this.dropDownId = dropDownId;
    this.toggle = function(){
        let dropDown = document.getElementById(this.dropDownId);
        dropDown.classList.toggle("dropdown-active");
    }
}

//Creando los Objetos
let dropDown1 = new GabyDropDown("dropdown1");
let dropDown2 = new GabyDropDown("dropdown2");
let dropDown3 = new GabyDropDown("dropdown3");
//Asignacion de Eventos
document.getElementById("dropdown1").addEventListener("click", () => dropDown1.toggle());
document.getElementById("dropdown2").addEventListener("click", () => dropDown2.toggle());
document.getElementById("dropdown3").addEventListener("click", () => dropDown3.toggle());