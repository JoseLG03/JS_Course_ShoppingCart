const cart = document.querySelector("#carrito");

const container = document.querySelector("#lista-carrito tbody");

const btnCalcel = document.querySelector("#vaciar-carrito");

const coursesList = document.querySelector("#lista-cursos");

const btnAdd = document.querySelector("#agregar-carrito");

let fullCart = [];

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

//funcion read course
function readCourse(e){

    const infoCourse ={
        img: e.querySelector('img').src,
        name: e.querySelector('h4').textContent,
        price: e.querySelector('span').textContent,
        id: e.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    fullCart = [...fullCart, infoCourse];
    console.log(fullCart);

    addCartHTML();
};

//function add to cart
function addCartHTML(){
    fullCart.forEach(infoCourse =>{
        const row = document.createElement('tr');
        row.innerHTML =`
            <td>
                ${infoCourse.name}
            </td>
        `;      

        container.appendChild(row);  
    });
}