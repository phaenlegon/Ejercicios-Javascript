const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

for (let i = 0; i < products.length; i++) {
    if (20 < products[i].sellCount) {
        goodProducts.push(products[i]);
    } else {
        badProducts.push(products[i]);
    }
    
}

console.log("Buenos productos: ", goodProducts);
console.log("Malos productos: ", badProducts);