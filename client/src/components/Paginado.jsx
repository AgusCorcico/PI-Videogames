import React from 'react'
import styles from './Paginado.module.css'

function Paginado({videogamesPerPage,allVideogames,paginado}) {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){
        pageNumbers.push(i);
    };

    return (
        <div className={styles.paginado}>
        <nav>
            <ul class="pagination">
                { pageNumbers?.map(number=>(
                    <li class="page-item" key={number}>
                        <a class="page-link" onClick={()=> paginado(number)} href>{number}</a>
                    </li>
                    ))}
            </ul>
        </nav>
        </div>

    )
}

export default Paginado