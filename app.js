// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final

    if (nombre === "") {
        alert("No pusiste nada, agrega un nombre :)");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está.");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.justifyContent = "space-between";
        li.style.padding = "5px";
        li.style.transition = "opacity 0.5s ease-out"; // Animación de desvanecimiento

        // Botón para eliminar un nombre
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.fontSize = "12px"; // Reducir tamaño del texto
        btnEliminar.style.padding = "4px 6px"; // Reducir tamaño del botón
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.style.cursor = "pointer";
        btnEliminar.style.border = "none";
        btnEliminar.style.background = "transparent";
        btnEliminar.style.color = "red";
        btnEliminar.style.transition = "transform 0.2s ease"; // Animación al pasar el mouse

        // Efecto hover (ligero zoom)
        btnEliminar.onmouseover = () => {
            btnEliminar.style.transform = "scale(1.2)";
        };
        btnEliminar.onmouseout = () => {
            btnEliminar.style.transform = "scale(1)";
        };

        // Eliminar con animación de desvanecimiento
        btnEliminar.onclick = () => {
            li.style.opacity = "0"; // Desvanece el elemento
            setTimeout(() => {
                eliminarAmigo(index);
            }, 500); // Espera la animación antes de eliminarlo del array
        };

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}


// Función para eliminar un nombre de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length <= 1) {
        alert("Necesitas agregar mas nombres :)");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p> El amigo que te toca es: <strong>${nombreSorteado}</strong> 🤫 </p>`;
    resultado.classList.remove("hidden");

    setTimeout(() => {
        resultado.classList.add("hidden");
    }, 1000);
}
