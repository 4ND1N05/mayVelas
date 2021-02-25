let listaPlatos = [{
        nombre: "Producto 1",
        descripcion: "Una velita bonita",
        precio: 9.00,
        img: "./Images/producto1.jpeg",
        id: 0,
        cantidad: 0,
        cat: "Dinner"
    },
    {
        nombre: "Producto 2",
        descripcion: "otra velita bonita",
        precio: 23.00,
        img: "./Images/producto2.jpeg",
        id: 1,
        cantidad: 0,
        cat: "Breakfast"
    },
    {
        nombre: "Producto 3",
        descripcion: "Otra velita bonita más.",
        precio: 21.00,
        img: "./Images/producto3.jpeg",
        id: 2,
        cantidad: 0,
        cat: "Fast Food"
    },
    {
        nombre: "Producto 4",
        descripcion: "Una bolsita para velitas bonitas.",
        precio: 21.00,
        img: "./Images/producto4.jpeg",
        id: 3,
        cantidad: 0,
        cat: "Fast Food"
    }

];



function pintarMenu() {
    let dishes = "";
    for (let i = 0; i < listaPlatos.length; i++) {
        dishes += `<div class="infoPlatos ${listaPlatos[i].cat}" data-numero="${listaPlatos[i].id}">
    <img src="${listaPlatos[i].img}">
    <div class="infoDetalle">
        <p class="price">$${listaPlatos[i].precio}</p>
        <h4>${listaPlatos[i].nombre}</h4>
        <p>${listaPlatos[i].descripcion}</p>
        <div class="counter">
            <button class="counterLeft" onclick="disminuir(this)">-</button>
            <p id="visor">${listaPlatos[i].cantidad}</p>
            <button class="counterRight" onClick="aumentar(this)">+</button>
        </div>
    </div>
</div>`
    }

    document.querySelector(".platos").innerHTML = dishes;

}

pintarMenu();


function reinicio() {
    pintarMenu();

    let categorias = document.querySelectorAll(".contenedorCategorias")
    let textoCategoria = document.querySelectorAll(".textoCategorias")

    categorias.forEach(cat => cat.classList.remove('contenedorCategoriasClick'))
    textoCategoria.forEach(txt => txt.classList.remove('textoCategoriasClick'))
}