import { createContext } from 'react';

export const pokemonContext = createContext({});
export const entirePokemonList = createContext({});
export const startCards = createContext({cardsAI: 0, cardsPlayer: 0});

export const pokemonProvider = ({children}) => {
  return (
    <pokemonContext.Provider>
      {children}
    </pokemonContext.Provider>
  )
}