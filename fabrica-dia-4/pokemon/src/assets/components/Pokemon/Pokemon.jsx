import { useState } from 'react'
import axios from 'axios'

function Pokemon() {

    const [pokemon, setPokemon] = useState("vazio")
    const getPokemon = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        setPokemon(response.data)
        console.log(pokemon.sprites.front_shiny)
        console.log(pokemon.stats.map((item)=> console.log(item)))
        
    }


    return (
        <div>
            <button onClick={getPokemon}>Pesquisa</button>

            {Pokemon === "vazio" ?
                <h2>Nada pesquisado ainda...</h2>
                :
                <div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"></img>
                    <h2>Resultados da perqusa: </h2>
                    <p>{Pokemon.name}</p>
                    <p>{Pokemon.weigth}</p>
                 
                    
                    
                    
                </div>

            }
        </div>
    )

}
export default Pokemon