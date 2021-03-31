const cart = document.querySelector("#carrito");

const container = document.querySelector("#lista-carrito tbody");

const btnCalcel = document.querySelector("#vaciar-carrito");

const coursesList = document.querySelector("#lista-cursos");

const btnAdd = document.querySelector("#agregar-carrito");

//Load listeners

loadEventsListeners();

function loadEventsListeners(){
    //function add course when click btn add 
    coursesList.addEventListener("click", addCourse);
};

//functions

function addCourse(e){
    
    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")){
        const selectedCourse = e.target.parentElement.parentElement;
        
        readCourse(selectedCourse);
    }
    
};

function readCourse(e){
    console.log(e);
};