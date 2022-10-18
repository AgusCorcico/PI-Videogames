import React from 'react'
import styles from './Card.module.css'

function Card({name,rating,genres, img}) {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImg} src={img} alt="img not found" width="260px" height="180px"/>
            <div className={styles.nameCard}>
                <h3 className={styles.cardName}>{name}</h3>
            </div>

            <div className={styles.genreCard}> 
                 <h3 className={styles.cardGenre}>{genres}</h3> 
            </div>
 

            <div className={styles.raitingCard}>
                <h4 className={styles.cardRating}>{rating}</h4>
            </div>
            
        </div>
    )
}

export default Card