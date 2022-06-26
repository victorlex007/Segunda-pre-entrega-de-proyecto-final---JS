let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const buscador = document.getElementById('search')



//Buscador

mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){

    contenedorProductos.innerHTML = ""

    array.forEach(el => {
    let div = document.createElement('div')
    div.classList.add("producto")
    div.innerHTML= `<div class="card">
                    <div class="card-image">
                    <img src="${el.img}">
                    <span class="card-title">${el.nombre}</span>
                    <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                    </div>
                    <div class="card-content">
                    <p>${el.descripcion}</p>
                    <p> $${el.precio}</p>
                    </div>
                    </div> `

    contenedorProductos.appendChild(div)
    
    let btnAgregar = document.getElementById(`boton${el.id}`)
    btnAgregar.addEventListener('click',()=>{
        agregarAlCarrito(el.id);
    })

  })


}

function agregarAlCarrito(id) {
    let productoAgregar = stockProductos.find(obj=> obj.id === id)
    carritoDeCompras.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()
    guardarCarrito()


}

function mostrarCarrito(productoAgregar) {

   let div = document.createElement('div')
    div.setAttribute('class', 'productoEnCarrito')
    div.innerHTML=`<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id !== productoAgregar.id)
        console.log(carritoDeCompras);
        actualizarCarrito()
    })
}


function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0 )   
}                                                          


function guardarCarrito() {
    if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}
localStorage.setItem("guardarCarrito", guardarCarrito)