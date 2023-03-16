let div$$ = document.querySelectorAll('div')[1];

let p$$ = document.createElement('p');
p$$.textContent ='estoy en el medio';

div$$.parentNode.insertBefore(p$$, div$$)