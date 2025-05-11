//Función que alterna distintos bloques a través de los botones.
//USADO PARA LOS BOTONES DE LOS PERSONAJES.
const ids = ['infoGota', 'infoSol', 'infoTrebol', 'infoSinson'];

function toggle(id) {
    ids.forEach(infoId => {
        const element = document.getElementById(infoId);
        if (infoId == id) {
            // Alterna sólo si es el mismo botón
            if (element.style.display === 'block') {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        } else {
            //Oculta las demás bloques
            element.style.display = 'none';
        }
    });
}


//Función para mostrar u ocultar bloques de forma apilada.
//USADO PARA LA BARRA DE RECOMPENSAS
const menus = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6', 'menu7', 'menu8', 'menu9', 'menu10', 'menu11'];

function showHide(id) {
    menus.forEach(buttonId => {
        if (buttonId == id) {
            const element = document.getElementById(buttonId);

            // Alterna sólo si es el mismo botón
            if (element.style.display === 'block') {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }   
        }
    });
}

// USADO PARA EL "ABOUT US"

function about() {
    const element = document.getElementById('text');
    const button = document.getElementById('mas')

    if (element.style.display === 'grid') {
        button.innerHTML = "Saber Más";
        element.style.display = 'none';
    } else {
        button.innerHTML = "Saber Menos";
        element.style.display = 'grid';
    }
}

//Función para mostrar el valor del slider.

const sliderValue = document.getElementById("sliderValue");
const inputSlider = document.getElementById("cuantity");

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    sliderValue.textContent = value;
});

//Función para el contador de dinero:

const display = document.getElementById("money");
const img = document.getElementById("cerdito");
let counter = 0;

function add() {
    counter++;
    display.textContent = counter + " €";

    if (counter > 999){
        display.style = "color: red;"
        counter = 999;
    } 
}


