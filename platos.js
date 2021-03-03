let listaPlatos = [{
        nombre: "Vela 1",
        descripcion: "- 345 gr aproximados de cera de soya, cera vegetal ecológica.",
        descripcion2: "- Apta para masajes.",
        descripcion3: "- Envase de vidrio.",
        precio: 45000,
        img: "./Images/vela1.jpg",
        id: 0,
        cantidad: 0,
        cat: "Dinner"
    },
    {
        nombre: "Vela 2",
        descripcion: "285 gr aproximados de de cera de soya, cera vegetal ecológica",
        descripcion2: "- Apta para masajes.",
        descripcion3: "- Envase de cerámica blanca.",
        precio: 40000,
        img: "./Images/vela2.jpg",
        id: 1,
        cantidad: 0,
        cat: "Breakfast"
    },
    {
        nombre: "Vela 3",
        descripcion: "44 gr aproximados de de cera de soya, cera vegetal ecológica",
        descripcion2: "- Apta para masajes.",
        descripcion3: "- Maceta de cemento.",
        precio: 18000,
        img: "./Images/vela3.jpg",
        id: 2,
        cantidad: 0,
        cat: "Fast Food"
    },
    {
        nombre: "Bolsa",
        descripcion: "Una bolsita para velitas bonitas.",
        precio: 5000,
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
    <div class="contenedorImagenProductos">
    <h4 class="nombreProducto">${listaPlatos[i].nombre}</h4>
    <img src="${listaPlatos[i].img}"></div>
    <div class="infoDetalle">
        <p class="price">$${listaPlatos[i].precio}</p>  
        <p class= "descripciones">${listaPlatos[i].descripcion}</p>
        <p class= "descripciones">${listaPlatos[i].descripcion2}</p>
        <p class= "descripciones">${listaPlatos[i].descripcion3}</p>
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