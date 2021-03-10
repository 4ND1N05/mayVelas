function filtrado(categoria) {
    let categoriaTexto = categoria.querySelector("p").innerHTML;
    let dishes = "";

    function pintarMenu() {
        for (let i = 0; i < listaPlatos.length; i++) {
            if (categoriaTexto === listaPlatos[i].cat) {
                dishes += `<div class="infoPlatos ${listaPlatos[i].cat}" data-numero="${listaPlatos[i].id}">
        <div class="contenedorImagenProductos">
        <h4 class="nombreProducto">${listaPlatos[i].nombre}</h4>
        <img src="${listaPlatos[i].img}"></div>
        <div class="infoDetalle">
            <p class="price">$${listaPlatos[i].precio} K</p>  
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
        }
    }

    pintarMenu();
    document.querySelector(".platos").innerHTML = dishes;

}



let categorias = document.querySelectorAll(".contenedorCategorias");
let textoCategoria = document.querySelectorAll(".textoCategorias");
let imagenCategoria = document.querySelectorAll(".contenedorCategoriasImg");


categorias.forEach(category => {
    category.addEventListener('click', function(e) {
        categorias.forEach(cat => cat.classList.remove('contenedorCategoriasClick'));
        this.classList.add('contenedorCategoriasClick');
        textoCategoria.forEach(txt => txt.classList.remove('textoCategoriasClick'));
        this.childNodes[3].classList.add('textoCategoriasClick');
        imagenCategoria.forEach(img => img.classList.remove('contenedorCategoriasImgClick'));
        this.childNodes[1].classList.add('contenedorCategoriasImgClick');

    })
})