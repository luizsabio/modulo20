function encontrarIndicesMaximoMinimo(array) {
    if (array.length === 0) {
        return "O array está vazio.";
    }

    let indiceMaximo = 0;
    let indiceMinimo = 0;
    let valorMaximo = array[0];
    let valorMinimo = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > valorMaximo) {
            valorMaximo = array[i];
            indiceMaximo = i;
        } else if (array[i] < valorMinimo) {
            valorMinimo = array[i];
            indiceMinimo = i;
        }
    }

    return {
        indiceMaximo: indiceMaximo,
        indiceMinimo: indiceMinimo
    };
}

// Exemplo de uso:
const meuArray = [12, 5, 7, 9, 22, 3];
const indices = encontrarIndicesMaximoMinimo(meuArray);

console.log(`O índice do maior valor é ${indices.indiceMaximo}`);
console.log(`O índice do menor valor é ${indices.indiceMinimo}`);
