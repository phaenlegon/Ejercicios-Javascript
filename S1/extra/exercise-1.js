
const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

for (let i = 0; i < users.length; i++) {
    if (users[i].years < 18) {
        console.log(users[i].name + " Es Usuario menor de edad"); 
    } else {
        console.log(users[i].name + " Es Usuario mayor de edad");
    }
    
}