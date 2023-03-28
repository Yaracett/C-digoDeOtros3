// Tenemos un li de productos
// crea una lista de productos y luego muestra los productos, permite al usuario filtrar los productos por tipo o color usando un botón.

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// se corrige el getElementsByName, por getElementById
const li = document.getElementById("lista-de-productos")
const $i = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  // se agrega una comprobación para verificar si la imagen se cargó correctamente
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);
// si la imagen no esta disponible, se crea una ubicación predeterminada
  imagen.onerror = function() {
    imagen.setAttribute('src', './imagen-predeterminada.jpg');
  }
  
    d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}
// en esta función podria se un error cuando el usuario solo busca,por ejemplo "neg" no encontrará la palabra "negro"
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  

// otro error, es no crear una carpeta Assets para organizar las imagenes