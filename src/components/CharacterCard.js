import React from 'react'

export default function CharacterCard({ character }) {

    return (
        <div className='card-container'>
            <h1 className='card-name'>{character.name}</h1>
            <img className='card-image'src={character.image} alt="" />
            <div className='card-info-div'>
                <h3 className='card-gender'>{character.gender}</h3>
                <h3 className='card-species'>{character.species}</h3>
                <h3 className='card-location'>{character.location.name}</h3>
                <h3 className='card-status'>{character.status}</h3>
            </div>
                
        </div>
    )
}
