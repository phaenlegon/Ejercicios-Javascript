const numbers = [32, 21, 63, 95, 100, 67, 43];

const buscoNumero = numbers.find((numero) => {
    return numero === 100;
});

console.log(buscoNumero);