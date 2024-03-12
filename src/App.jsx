import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const fetchPokemon = async () => {
    const data = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=50");
    // on va cherche l'API
    const dataJson = await data.json();
    // on transforme le resultat en fichier json

    setAllPokemons(dataJson.results) 
    //setAllPokemon est une fonction, on lui assigne dataJson.result en parametre)
    console.log(allPokemons)

    
  }

  useEffect (() => {
    fetchPokemon();
  }, [])


  
  return (
    <>

      <div>
        {
        allPokemons.map((element, index)=> {
          return <p>{element.name}</p>
        })
      }
      </div>

    </>
  )
    }

export default App
