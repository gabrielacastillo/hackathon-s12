//Funcion Constructora
function GabyAccordion (accordionId){
    this.accordionId = accordionId;
    this.init = function(){
        const questions = document.querySelectorAll(".question");
        
        questions.forEach((question) => {
            question.addEventListener("click", function(e){
                //remove shown from others elements
                let currentItem = e.target.parentElement;
                let list = currentItem.parentElement.children;
                for (const el of list) {
                    el.classList.remove("shown");
                }
                
                //add shown to current element
                currentItem.classList.add("shown");
            });
        });
    }
}

let gabyAccordion = new GabyAccordion("Accordion1");
gabyAccordion.init();
