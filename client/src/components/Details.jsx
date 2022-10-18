import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getVideogameDetails } from '../actions';
import { useEffect} from 'react'; 

import styles from './Details.module.css'

function Details(props) {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=> {
        dispatch(getVideogameDetails(id))
    },[dispatch,id])

    const VideogameDetails = useSelector((state) => state.details)

    return (
        <div className={styles.cardContainer}>
            {
                VideogameDetails.name ?
                <div key={VideogameDetails.id} className={styles.gameDetails}>
                    <div>
                    <h1>{VideogameDetails.name}</h1>
                    </div>
                    <img className={styles.gameImg} src={VideogameDetails.img ? VideogameDetails.img + ' ': VideogameDetails.image + ' ' } alt=""/>
                    <h2>Released: {VideogameDetails.released} </h2>
                    <h2>{VideogameDetails.genres.join(" | ")} </h2>
                    <h2>Rating: {VideogameDetails.rating}</h2>
                    <h2>Description
                        {
                        <h5 className={styles.descContainer} dangerouslySetInnerHTML={{__html: VideogameDetails.description}}></h5>
                        }
                        </h2>
                </div>
                :
                <div>
                    <h2>Loading...</h2>
                </div>
                
            } 
            <Link to='/home'>
                <button type="button" class="btn btn-light btn-lg">Go Back</button>
            </Link>
        </div>
    )
}

export default Details