const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];


let VentasTotal = 0;

for(let i = 0; i < products.length; i++) {
    VentasTotal += products[i].sellCount;
}

console.log("El total de los productos es: ",VentasTotal);