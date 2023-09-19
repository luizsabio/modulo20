const {mdc,numero1,numero2} = require('./mdc')
const calcularMDC = require('./mdc');

describe('Calcular MDC', () => {
    it('48 e 18', () => {
        expect(calcularMDC(48,18)).toBe(6)
        
    });
    
});
