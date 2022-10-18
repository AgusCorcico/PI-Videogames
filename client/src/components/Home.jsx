import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVideogames, filterVideogamesByGenres, getGenres, filterCreated, orderByName, orderByRating } from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';

import styles from './Home.module.css';


function Home() {

    const dispatch = useDispatch()
    /* con el useSelector traigo todo lo que esta en el estado de games */
    const allVideogames = useSelector((state)=> state.videogames);   /* es lo mismo que hacer mapStateToProps */
    const allGenres = useSelector(state => state.genres);
    const [ordenByName, setOrdenByName] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage, setVideogamesPerPage] = useState(15);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame,indexOfLastVideogame)
    
    const paginado =(pageNumber) => {
        setCurrentPage(pageNumber)
    }


  /* es lo mismo que hacer el matchDispatchToProps */
    useEffect(()=> {
        dispatch(getVideogames());       
    },[dispatch])

    useEffect(()=> {
        dispatch(getGenres());       
    },[dispatch])



    function handleClick(e){
        e.preventDefault()
        dispatch(getVideogames());
    } 

    function handleSortByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrdenByName(`Ordenado ${e.target.value}`)
    }

    function handleSortByRating(e){
        e.preventDefault();
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1);
        setOrdenByName(`Ordenado ${e.target.value}`)
    }



    function handleFilterCreated(e){
        e.preventDefault()
        dispatch(filterCreated(e.target.value))
    }

        function handleFilterGenres(e){
        e.preventDefault()
        dispatch(filterVideogamesByGenres(e.target.value))
    }

    return (
        <div className={styles.home}>
            <nav className={styles.navbar}>
                <li className={styles.liNav}>
                    <Link to='/' className={styles.linksNav}>
                        <button type="button" class="btn btn-dark">
                            Agus Videogames
                        </button>
                    </Link>
                    <Link to='/videogame' className={styles.linksNav}>
                        <button type="button" class="btn btn-dark">
                            Create Videogame
                        </button>
                    </Link>
                    <button type="button" class="btn btn-dark" onClick={handleClick}>
                        Refresh Videogames
                    </button>
                    <Link to='/about'className={styles.linksNavAbout}>
                        <button type="button" class="btn btn-dark">
                            About
                        </button>
                    </Link>
                </li>
                <SearchBar />
            </nav>
            <div className={styles.paginado}>
            <Paginado 
                videogamesPerPage={videogamesPerPage}
                allVideogames={allVideogames.length} /* porque necesito un numero */
                paginado={paginado}
            />
            </div>
            <div className={styles.selectsAndCards}>
                <div  className={styles.sideOptions}>
                <select class="btn btn-dark" onChange={e => handleSortByName(e)}>
                    <option value="Alpha">Alphabetically Sort</option>
                    <option value="Asc">Sort:  A - Z</option>
                    <option value="Desc">Sort:  Z - A</option>
                </select>
                <br />
                <select className={styles.selectBtn} class="btn btn-dark" onChange={e => handleFilterCreated(e)}>   
                    <option value="All">All Games</option>
                    <option value="Api">Games Api</option>
                    <option value="Created">Created</option>
                </select>
                <br />
                <select className={styles.selectBtn} class="btn btn-dark" onChange={e => handleSortByRating(e)}>
                    <option value="Rating">Rating</option>
                    <option value="High">High Rating</option>
                    <option value="Low">Low Rating</option>
                </select>
                <br />
                <select className={styles.selectBtn} class="btn btn-dark" onChange={e => handleFilterGenres(e)}>
                    <option value="Genres">All Genres</option>
                    {allGenres?.map(e =>
                        <option key={e.id} value={e.name} >{e.name}</option>
                        )
                    }
                </select>
                </div>
            <div className={styles.homeCardContainer}>
                {
                currentVideogames && currentVideogames.map( (el) => {
                    
                    return(
                        <div className={styles.homeCard}>
                        <Link to={"/detail/"+ el.id} className={styles.linkCard}>
                        <Card name={el.name}  rating={el.rating}   img={ el.image }  genres={el.genres.join(" | ")}  />
                        </Link>
                        </div>
                    )
                })
                }  
            </div>
            </div>
            <div className={styles.paginado}>
            <Paginado 
                videogamesPerPage={videogamesPerPage}
                allVideogames={allVideogames.length} /* porque necesito un numero */
                paginado={paginado}
            />
            </div>
        </div>
    )
}

export default Home