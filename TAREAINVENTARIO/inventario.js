let inventario = [];

function mostrarMenu() {
    let opcion = prompt(
        "SELECCIONE UNA OPCIÓN:\n" +
        "1. AGREGAR PRODUCTO\n" +
        "2. VER INVENTARIO\n" +
        "3. ACTUALIZAR CANTIDAD\n" +
        "4. SALIR"
    );
    return opcion;
}

function agregarProducto() {
    let nombre = prompt('NOMBRE DEL PRODUCTO:');
    let cantidad = parseInt(prompt('CANTIDAD INICIAL:'));
    let precio = parseFloat(prompt('PRECIO UNITARIO:'));

    inventario.push({ nombre, cantidad, precio });
    alert('PRODUCTO AGREGADO CORRECTAMENTE.');
}

function verInventario() {
    if (inventario.length === 0) {
        alert('EL INVENTARIO ESTÁ VACÍO.');
    } else {
        let listado = 'LISTADO DE PRODUCTOS:\n';
        inventario.forEach((p, index) => {
            listado += `${index + 1}. ${p.nombre} - Cantidad: ${p.cantidad}, Precio: $${p.precio}\n`;
        });
        alert(listado);
    }
}

function actualizarCantidad() {
    if (inventario.length === 0) {
        alert('NO HAY PRODUCTOS EN EL INVENTARIO PARA ACTUALIZAR.');
        return;
    }

    let listado = 'SELECCIONE EL NÚMERO DEL PRODUCTO A ACTUALIZAR:\n';
    inventario.forEach((p, index) => {
        listado += `${index + 1}. ${p.nombre} (Actual: ${p.cantidad})\n`;
    });

    let indexProd = parseInt(prompt(listado)) - 1;

    if (indexProd >= 0 && indexProd < inventario.length) {
        let nuevaCantidad = parseInt(prompt('INGRESE LA NUEVA CANTIDAD:'));
        if (!isNaN(nuevaCantidad)) {
            inventario[indexProd].cantidad = nuevaCantidad;
            alert('CANTIDAD ACTUALIZADA CORRECTAMENTE.');
        } else {
            alert('CANTIDAD NO VÁLIDA.');
        }
    } else {
        alert('PRODUCTO NO EXISTE.');
    }
}

// Ciclo principal del programa
let continuar = true;
while (continuar) {
    let eleccion = mostrarMenu();
    switch (eleccion) {
        case '1':
            agregarProducto();
            break;
        case '2':
            verInventario();
            break;
        case '3':
            actualizarCantidad();
            break;
        case '4':
            continuar = false;
            alert('SALIENDO DEL PROGRAMA...');
            break;
        default:
            alert('OPCIÓN NO VÁLIDA.');
            break;
    }
}