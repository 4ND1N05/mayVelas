let listaCategorias = [

    {
        nombre: "Breakfast",
        img: "./Images/categoria1.jpg",
        id: 0
    },

    {
        nombre: "Fast Food",
        img: "./Images/categoria2.jpg",
        id: 1
    },

    {
        nombre: "Dinner",
        img: "./Images/categoria3.jpg",
        id: 2
    }
];

let sliderCat = "";

function pintarCat() {
    for (let i = 0; i < listaCategorias.length; i++) {
        sliderCat += `<div id="contenedorCategorias" class="contenedorCategorias" onclick="filtrado(this)" data-numero="${listaCategorias[i].id}" style="border:none;">
        <div class="container-img"><img class="contenedorCategoriasImg" src="${listaCategorias[i].img}"></div>
    </div>`
    }
}

pintarCat();
document.querySelector(".categorias").innerHTML = sliderCat;