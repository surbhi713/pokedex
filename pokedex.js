const pokeInput= document.getElementById('pokeInput')
const pokemon = document.getElementById('pokemon')

async function getPokemon() {
    const input = pokeInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data)

        const types = data.types.map(t => `<span class="type">${t.type.name}</span>`).join('');
        const stats = data.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join('');


        pokemon.innerHTML=`
        <h2>${data.name.toUpperCase()} (#${data.id}) </h2>
        <img src = "${data.sprites.front_default}" alt="${data.name}">
        <img src ="${data.sprites.back_default}" alt="${data.name}">
        <h3>weight:${data.weight}</h3>
        <div>${types}</div>
        <h3>Base Stats: </h3>
        <ul style="list-style: none; padding: 0;">${stats}</ul>`

        // <h1>helli</h1>    


        // outside of any string, JavaScript thinks 
        // it’s invalid code and throws a syntax error.

        
    }catch(err){
       pokemon.innerHTML=`<h1>Pokemon Not Found!😢<h1/>`
    }
}


// what we learnt is : you can not use html in js , you have to use back ticks to apply html in js 
// but can use html in js in react jsx
