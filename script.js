const carrito = [];
const listaCarrito = document.getElementById('listaCarrito');
const carritoVacio = document.getElementById('carritoVacio');

function actualizarCarrito() {
  listaCarrito.innerHTML = '';
  if (carrito.length === 0) {
    carritoVacio.style.display = 'block';
  } else {
    carritoVacio.style.display = 'none';
    carrito.forEach((producto) => {
      const li = document.createElement('li');
      li.textContent = producto;
      listaCarrito.appendChild(li);
    });
  }
}

function agregarCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

document.getElementById('pedidoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (carrito.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de enviar el pedido.');
    return;
  }
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  alert(`Gracias, ${nombre}. Tu pedido de ${carrito.join(', ')} será procesado.\nContacto: ${telefono}\nDirección: ${direccion}`);
  carrito.length = 0;
  actualizarCarrito();
  this.reset();
});

actualizarCarrito();