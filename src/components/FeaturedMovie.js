import React from 'react'
import './FeaturedMovie.css'

const FeaturedMovie = ({item}) => {

    let firstDate = new Date(item.release_date);
    let genres = [];

    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    let description = item.overview;

    if(description.length > 200){
        description = description.substring(0,200)+"...";
    }

  return (
    <section className='featured' style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
        <div className='featured--vertical'>
            <div className='featured--horizontal'>
                <div className='featured--title'>{item.title}</div>
                <div className='featured--info'>
                    <div className='featured--points'>{item.vote_average} pontos</div>
                    <div className='featured--year'>{firstDate.getFullYear()}</div>
                    <div className='featured--views'>{item.popularity} views</div>
                </div>
                <div className='featured--description'>{description}</div>
                <div className='featured--buttons'>
                    <a href={`/watch/${item.id}`} className='btn-br'>Assistir</a>
                    <a href={`/list/add/${item.id}`} className='btn-pt'>+ Minha Lista</a>
                </div>
                <div className='featured--genres'><strong>Generos: </strong>{genres.join(", ")}</div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedMovie