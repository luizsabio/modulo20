function calcularMDC(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMDC(b, a % b);
    }
}

const numero1 = 48;
const numero2 = 18;

const mdc = calcularMDC(numero1, numero2);
console.log(`O MDC de ${numero1} e ${numero2} é ${mdc}`);
