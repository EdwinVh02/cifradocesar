const textoACifrarInput = document.getElementById("textoACifrar");
const btnCifrar = document.getElementById("btnCifrar");
const textoCifradoInput = document.getElementById("textoCifrado");
const btnDescifrar = document.getElementById("btnDescifrar");
const textoDescifradoInput = document.getElementById("textoADescifrar");
const text2 = document.getElementById("resultado2");

const abecedario = "abcdefghijklmnñopqrstuvwxyz";

function cifradoCesar(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    const esLetra = /[a-zA-Z]/.test(char);

    if (esLetra) {
      let posicion = abecedario.indexOf(char);

      if (posicion >= 0) {
        posicion = (posicion + 5) % 27;
        resultado += abecedario[posicion];
      }
    } else {
      resultado += char;
    }
  }

  return resultado;
}

function descifradoCesar(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    const esLetra = /[a-zA-Z]/.test(char);

    if (esLetra) {
      let posicion = abecedario.indexOf(char);

      if (posicion >= 0) {
        posicion = (posicion - 5) % 27; 

        if (posicion < 0) {
          posicion += 27;
        }

        resultado += abecedario[posicion];
      }
    } else {
      resultado += char;
    }
  }

  return resultado;
}

btnCifrar.addEventListener("click", () => {
  const textoACifrar = textoACifrarInput.value;
  const textoCifrado = cifradoCesar(textoACifrar);
  textoCifradoInput.textContent = textoCifrado;
});

btnDescifrar.addEventListener("click", () => {
  const textoCifrado = textoDescifradoInput.value;
  const textoDescifrado = descifradoCesar(textoCifrado);
  text2.textContent = textoDescifrado;
});
