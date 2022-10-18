import {React, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getNameVideogames} from '../actions';

import styles from './Searchbar.module.css'

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleIputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameVideogames(name))
        setName("")
    }

    return (
        <div className={styles.searchBar}>
            <div className={styles.inputSearch}>
            <input 
                type="text" 
                class="form-control rounded" 
                placeholder="Search Videogame..." 
                onChange={e=> handleIputChange(e)}
                value={name}
            />
            </div>
            <button class="btn btn-dark" type="submit" onClick={e=> handleSubmit(e)}>Search</button>
        </div>
    )
}

export default SearchBar