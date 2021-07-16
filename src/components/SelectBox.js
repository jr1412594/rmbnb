import React from 'react'

export default function SelectBox({ allCharacters, handleChange }) {

    const locationOptions = () => {
        const allLocations = allCharacters.map(character => character.location.name)
        const uniqLocationList = [...new Set(allLocations)]
        return uniqLocationList.map(locations => <option>{locations}</option>)
    }

    return (
        <div>
            <select name='select' onChange={ handleChange }>
                <option value='all'>Show all</option>
                {locationOptions()}
            </select>
        </div>
    )
}
