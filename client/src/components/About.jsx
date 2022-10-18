import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css'
function About() {
  return(
    <div className={styles.about}>
        <h1>
          Agus Videogames
        </h1>
        <div className={styles.aboutCont}>
        <p>
        This is an App in which you can find different video games with their respective relevant information,
          such as name, image, description, rating and gender. To develop it I used an external API rawg. 
          From it you can, among other things:
            </p>    
            <ul className={styles.list}>
            <li>Find video games.</li><br />
            <li>Filter / Sort them.</li><br />
            <li>Add new video games.</li><br />
            </ul>
        <p>
          The App was built with libraries like React and Redux for the frontend;
          Node and Sequalize for the Backend, the database used was Sequelize - Postgres. 
          CSS and Bootstrap were used for styles
        </p>
        <div className={styles.btn}>
            <Link to="/home">
                <button type="button" class="btn btn-dark btn-lg">Go Back</button>
            </Link>
        </div>
        </div>
    </div>
);
};

export default About