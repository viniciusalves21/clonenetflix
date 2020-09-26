import React from 'react';
import './MovieRow.css';

export default ({title, items}) => {
    return(
        <div>
            <h2> {title}</h2>
            <div className="MovieRow--listarea">
                <div className="movieRow--list" >
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_title} />
                    </div>
                ))}
                </div>


                
            </div>
        </div>
    );

}