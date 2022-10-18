import React ,{useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import {postVideogame, getGenres,getVideogames} from '../actions';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Videogamecreate.module.css'

function VideogameCreate() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allGames = useSelector(state => state.videogames);
    const genresAll = useSelector((state)=> state.genres)

    const [input, setInput] = useState({
        name:"",
        image:"",
        description:"",
        released:"",
        rating:"",
        genres:[],
       
    })


    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])

    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch])




    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelectGenre(e){
        setInput({
            ...input,
            genres: [...new Set([...input.genres,e.target.value])]
            
        })
    }

    function handleGenresDelete(e){
        setInput({
            ...input,
            genres: input.genres.filter(genre => genre !== e)
        })
    }



    let regexRating =/[+-]?([0-9]*[.])?\b[0-5]{1,1}\b/; //regex 1-5 decimal inclusive
    let expReg = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/;

    function handleSubmit(e){
        e.preventDefault();

        if(!input.name){
            return alert('Enter game name');
        }else if(!expReg.test(input.name)){
            return alert('The name must only have letters or numbers')
        }else if(!input.released){
            return alert('Enter a released date');
        }else if(!regexRating.test(input.rating)) {
            return alert('Enter a rating from 0 to 5 (Integer or Float)');
        }else if(!input.genres.length){
            return alert('Select at least 1 genres');
        }else if(!input.description){
            return alert('Enter description game');
        }
        console.log(input)
        dispatch(postVideogame(input))
        alert('Videogame created')
        setInput({
            name:"",
            description:"",
            released:"",
            image:"",
            rating:"",
            genres:[],
        })
        navigate('/home')
    }

    


    return (
        <div className={styles.allCont}>
            <div className={styles.goBackBtn}>
            <Link to='/home'>
                <button class="btn btn-light btn-lg">Go Back</button>
            </Link>
            </div>
            <div className={styles.title}>
            <h1>Create your videogame</h1>
            </div>
            <form onSubmit={(e)=>handleSubmit(e)} className={styles.formContainer}>
                <label>Name:</label>
                    <input 
                        type='text'
                        value={input.name}
                        name='name'
                        required=""
                        autoComplete="off"
                        placeholder="Name"
                        onChange={e =>handleChange(e)}
                    />
                <label>Released:</label>
                    <input
                        type="date" 
                        value={input.released}
                        name="released"
                        required=""
                        autoComplete="off"
                        onChange={e =>handleChange(e)}
                    />
                <label>Rating:</label>
                    <input
                        type="text" 
                        value={input.rating}
                        name="rating"
                        required=""
                        autoComplete="off"
                        placeholder="Rating"
                        onChange={e =>handleChange(e)}
                    />
                <label>Image:</label>
                    <input
                        type="text" 
                        value={input.image}
                        name="image"
                        required=""
                        autoComplete="off"
                        placeholder=""
                        onChange={e =>handleChange(e)}
                    />
                <div  className={styles.genreContainer}>
                        <select onChange={(e)=> handleSelectGenre(e)}>
                            {genresAll.map((genre) =>{
                                return (
                                <option key={genre.id} value={genre.name}>
                                    {genre.name}
                                </option>
                            )})}
                        </select>
                </div>
                <div className={styles.deleteCont}>
                    {input.genres.map((el) => {
                        return (
                    <div key={el} className={styles.deleteBtn}>
                        <button class="btn btn-outline-danger btn-sm"
                        onClick={()=> handleGenresDelete(el)}
                        >{el}
                        </button>
                    </div>
                    )})}
                </div>
                    <label>Description</label>
                        <textarea 
                            type="text" 
                            value={input.description}
                            name="description"
                            required=""
                            autoComplete="off"
                            placeholder="Description"
                            onChange={e =>handleChange(e)}
                        />
                <div className={styles.deleteBtn}>  
                <button class="btn btn-light btn-lg" type='submit'>Create Videogame</button>
                </div>
                
            </form>
        </div>
    ) 
}

export default VideogameCreate