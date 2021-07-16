import React from 'react'

export default function SearchInput({ handleChange }) {
    return (
        <div>
            <input className='search-bar' 
            type='text'
            name='search' 
            placeholder='Search Character'
            onChange={handleChange}
            />
        </div>
    )
}
