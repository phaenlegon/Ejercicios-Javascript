const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const input$$ = documents.querySelector("input")

const llamar = (event) => {
    console.log(event.target.value);
    const filtrado = streamers.filter
    (streamers => streamers.name)
}
input$$.addEventListener("input", llamar)