const form = document.getElementById('contPopsys');
const popsy = document.getElementById('popsy');
let tasteSelected = document.getElementById('tastePopsy');

let tastePopsy = [
    {
        name: "",
        image: ''
    },
    {
        name: 'sandia',
        image: '/Images/Sandia.png'
    },
    {
        name: 'maracuya',
        image: '/Images/Parchita.png'
    },
    {
        name: 'kiwi',
        image: '/Images/Kiwi.png'
    },
    {
        name: 'durazno',
        image: '/Images/Durazno.png'
    }
]

tasteSelected.addEventListener('change', (e) => {
    let valor = (e.target.value);

    tastePopsy.forEach(function (elemento) {
        if (elemento.name == valor) {
            if (valor == "") {
                popsy.innerHTML = ''
            } else {
                popsy.innerHTML = ` <img src="${elemento.image}" class="popsyImg">`
            }
        }
    })
});

form.addEventListener('submit', (e) => {

    e.preventDefault();

    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let direccion = document.getElementById('adress').value;
    let contacto = document.getElementById('tel').value;
    

    form.style.display = 'none';

    let bill = document.getElementById('bill');

    bill.innerHTML = `
                <div class="billBck">
                    <img src="/Images/Pospys.png" alt="Popsy's" class="imgPopsy">
                    <h2>Factura</h2>
                    <p> ${nombre} ${apellido}</p>
                    <p> Tu Popsy sabor: ${tasteSelected.value}</p>
                    <p> Llegará a la: ${direccion}</p>
                    <h2>Gracias por comprar en Popsy's HomeMade, ¡Disfruta tu Popsy!</h2>
                </div>`
});
