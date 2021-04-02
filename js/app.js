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
        count: 1
    }

    fullCart = [...fullCart, infoCourse];
    console.log(fullCart);

    addCartHTML();
};

//function add to cart
function addCartHTML(){
    clearCart();

    fullCart.forEach(infoCourse =>{
        const{img,name, price, count,id} = infoCourse
        const row = document.createElement('tr');
        row.innerHTML =`
            <td>
                <img src="${img}" width = 100 />
            </td>
            <td>
                ${name}
            </td>
            <td>
                ${price}
            </td>
            <td>
                ${count}
            </td> 
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;      

        container.appendChild(row);  
    });
}

//clean cart
function clearCart(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}