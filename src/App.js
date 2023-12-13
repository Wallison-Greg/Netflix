//style
import './App.css';

//api
import Tmdb from './Tmdb';

//hoocks
import { useEffect, useState } from 'react';

//components
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async() => {

      //pegando a lisata total 
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o filme destaque
      let destaque = list.filter(i => i.slug === 'trending');
      let randomChosen = Math.floor(Math.random() * (destaque[0].items.results.length -1));
      let chosen = destaque[0].items.results[randomChosen]

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie')
      console.log(chosenInfo)
      setFeatureData(chosenInfo)
    }
    loadAll();

  }, [])

  useEffect(() => { //cabeçalho movel 
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      }
      else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      { featureData && <FeaturedMovie item={featureData}/>}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Projeto feito pelo curso <strong>B7Web</strong> <br/>
        Dados pegos pelo site <strong>Themoviedb.org</strong> <br/>
        <strong>2023</strong>
      </footer>
        
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://blog.motionisland.com/wp-content/uploads/2022/03/Loading_1.gif'/>
        </div>
      }

    </div>
  );
}

export default App;
