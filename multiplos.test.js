const { resultado} = require('./multiplos')

describe('Soma dos múltiplos de 5 ou 7 até a 1000', () => {
    it('Soma', () => {
     
        expect(resultado).toBe(156361)
        
    });
    
});
