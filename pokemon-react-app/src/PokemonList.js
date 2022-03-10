import React from 'react';

function PokemonList({ pokemon,pokemonUrl }) {
    return (
        <div>
            {pokemon.map((poke,index) => (
                <div key={ poke }>
                    {poke} ------ <a href={pokemonUrl[index]}>{pokemonUrl[index]}</a>
                </div>
            ))}
        </div>
    )
}

export default PokemonList;