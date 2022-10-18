import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./LandingPage.module.css"

function LandingPage() {
    return (
        <div className={styles.landingContainer}>|  
            <div className={styles.landingContainer2}>
                <h1 className={styles.title}>AgusVideogames</h1>
                <Link to="/home">
                    <button type="button" class="btn btn-dark btn-lg">Get in!</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage