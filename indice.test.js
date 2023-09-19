const encontrarIndicesMaximoMinimo = require('./indice'); 

describe('Encontrar Índices do Maior e Menor Valores', () => {
    it('Deve encontrar o índice do maior e do menor valor corretamente', () => {
        const meuArray = [12, 5, 7, 9, 22, 3];
        const indices = encontrarIndicesMaximoMinimo(meuArray);

        expect(indices.indiceMaximo).toBe(4); 
        expect(indices.indiceMinimo).toBe(5); 
    });

    it('Deve retornar mensagem para array vazio', () => {
        const arrayVazio = [];
        const resultado = encontrarIndicesMaximoMinimo(arrayVazio);

        expect(resultado).toBe("O array está vazio.");
    });
});
