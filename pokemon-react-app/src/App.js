import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import PageJump from './PageJump';
import axios from 'axios';
import './App.css';

function App() {
    const [pokemon, setPokemon] = useState([])
    const [pokemonUrl, setPokemonUrl] = useState([])

    const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon")

    const [prevPage, setPrevPage] = useState()
    const [nextPage, setNextPage] = useState()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()
        axios.get(page, { signal: controller.signal })
            .then(res => {
            setLoading(false)
            setPrevPage(res.data.previous)
            setNextPage(res.data.next)
                setPokemon(res.data.results.map(poke => poke.name))
                setPokemonUrl(res.data.results.map(poke => poke.url))
        })
        return () => controller.abort()
    }, [page])

    function goNext() {
        setPage(nextPage)
    }
    function goPrev() {
        setPage(prevPage)
    }

    if (loading) {
        return "Loading ...."
    }

    return (
        // By using the PokemonList, set the pokemon=pokemon from state
        <div>
            <PokemonList pokemon={pokemon} pokemonUrl={pokemonUrl} />
            <PageJump
                goPrev={prevPage ? goPrev : null}
                goNext={nextPage ? goNext : null}
            />
        </div>
    )
}

export default App;
