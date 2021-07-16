import React from 'react'

import CharacterCard from './CharacterCard'
import SearchInput from './SearchInput' 
import SelectBox from './SelectBox'

export default function CharacterContainer(
        { 
            filteredCharacters, 
            handleChange ,
            allCharacters
        }
    ) {

    const displayCharacters = () => {
        return filteredCharacters.map(character => {
            return <CharacterCard character={character} key={character.id} />
        })
    }

    return (
        <div className='character-container'>
            <div className='search-input-div'>
                <SearchInput handleChange={ handleChange } />
                <SelectBox allCharacters={ allCharacters } handleChange={ handleChange }/>
            </div>
            <div className='character-container'>
                {displayCharacters()}
            </div>
        </div>
    )
}
