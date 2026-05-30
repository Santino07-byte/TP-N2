const juegos = [
    { nombre: "Skyrim", categoria: "aventura" },
    { nombre: "Minecraft", categoria: "aventura" },
    { nombre: "Project Zomboid", categoria: "supervivencia" },
    { nombre: "Terraria", categoria: "aventura" },
    { nombre: "Persona 5 Royal", categoria: "jrpg" },
    { nombre: "Euro Truck", categoria: "simulacion" }
];

const lista = document.getElementById("lista");

function mostrar(elementos) {
    lista.innerHTML = "";

    elementos.forEach(juego => {
        lista.innerHTML += `
            <div class="caja">
                ${juego.nombre}
            </div>
        `;
    });
}

mostrar(juegos);

document.getElementById("todos").addEventListener("click", () => {
    mostrar(juegos);
});

document.getElementById("aventura").addEventListener("click", () => {
    const filtrados = juegos.filter(
        juego => juego.categoria === "aventura"
    );

    mostrar(filtrados);
});