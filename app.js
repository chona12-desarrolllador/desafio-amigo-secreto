// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById(`amigo`);
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    listaDeAmigos.push(nombre);

    const ul = document.getElementById(`listaAmigos`);
    const li = document.createElement(`li`);
    li.textContent = nombre;
    ul.appendChild(li);

    input.value = "";
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (listaDeAmigos.length === 0) {
    resultado.textContent = '⚠️ La lista está vacía. Agrega al menos un nombre.';
    return;
  }

  const indice = Math.floor(Math.random() * listaDeAmigos.length);
  const elegido = listaDeAmigos[indice];

  resultado.textContent = `🎉 El amigo secreto es: ${elegido}`;
}


