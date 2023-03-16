let btn$$ = document.createElement('button');
btn$$.setAttribute('id','btnToClick')

document.body.appendChild(btn$$);
btn$$.textContent = 'Clickeame';

 btn$$.addEventListener('click', function(event){
    console.log(event);
 });