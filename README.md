# 📦 Sistema de Gestión de Inventario en JavaScript

Un sistema interactivo para la gestión de productos e inventario desarrollado en JavaScript. Este proyecto permite agregar productos, consultar existencias y actualizar las cantidades registradas mediante una estructura clara basada en loops y control de flujo.

---

## 🎯 Requerimientos del Proyecto

El programa cumple con las siguientes especificaciones y características funcionales:

1. **Agregar Producto:** Permite ingresar un nombre, cantidad inicial y precio unitario.
2. **Ver Inventario:** Muestra el listado completo de productos almacenados.
3. **Actualizar Inventario:** Permite modificar la cantidad de un producto existente.
4. **Salir:** Finaliza el programa cuando el usuario lo decide.

---

## 🛠️ Tecnologías Utilizadas

* **JavaScript (ES6+)**
* **Node.js** (Para ejecución por consola mediante el módulo nativo `readline`)
* **HTML5** (Para ejecución interactiva en el navegador con `prompt` y `alert`)

---

## 📊 Diagrama de Flujo (Flujograma)

```text
       [ INICIO ]
           │
           ▼
┌──────────────────────┐
│  MOSTRAR MENÚ        │
│  1. Agregar Producto │
│  2. Ver Inventario   │
│  3. Actualizar Cant. │
│  4. Salir            │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ LEER OPCIÓN USUARIO  │
└──────────┬───────────┘
           │
           ├─────────────────────────┬─────────────────────────┬─────────────────────────┐
           │ (Opción 1)              │ (Opción 2)              │ (Opción 3)              │ (Opción 4)
           ▼                         ▼                         ▼                         ▼
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│ PEDIR NOMBRE,        │  │ VERIFICAR SI HAY     │  │ SELECCIONAR PRODUCTO │  │ TERMINAR CICLO       │
│ CANTIDAD Y PRECIO    │  │ PRODUCTOS EN LISTA   │  │ Y PEDIR NUEVA CANT.  │  │ Y MOSTRAR SALIDA     │
└──────────┬───────────┘  └──────────┬───────────┘  └──────────┬───────────┘  └──────────┬───────────┘
           │                         │                         │                         │
           ▼                         ▼                         ▼                         ▼
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│ AGREGAR AL ARREGLO   │  │ MOSTRAR LISTADO O    │  │ ACTUALIZAR CANTIDAD  │  │        [ FIN ]       │
│ DE INVENTARIO        │  │ AVISAR QUE ESTÁ VACÍO│  │ EN EL REGISTRO       │  │                      │
└──────────┬───────────┘  └──────────┬───────────┘  └──────────┬───────────┘  └──────────────────────┘
           │                         │                         │
           └─────────────────────────┴─────────────────────────┘
                                     │
                                     ▼ (Vuelve al menú)


🚀 Cómo Ejecutar el Proyecto
Opción 1: En la Terminal con Node.js
Asegúrate de tener instalado Node.js.

Abre una terminal en la carpeta del proyecto.

Ejecuta el archivo adaptado para consola:

Bash
node inventario.js
Opción 2: En el Navegador Web
Crea un archivo index.html y vincula tu script o inserta el código en la etiqueta <script>.

Abre el archivo index.html en tu navegador web.

Interactúa mediante las ventanas emergentes (prompt / alert).

✒️ Autor
Edgar Alexander Constanza Jovel

📄 Licencia
Este proyecto está bajo los términos de la Licencia MIT. Siéntase libre de usarlo, modificarlo y distribuirlo para fines académicos o profesionales.
