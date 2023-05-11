import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Popular = () => {

  const [popularMovies , setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovie = async () => {
      const istek = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
      setPopularMovies(istek.data.results) // data.results yazıyorum ki aşağıda ismini imgi çağırırken doğru path verilsin
      console.log(istek)
    }
    getPopularMovie();
  },[])

  return (
    <div>
             <h1 className='typeMovie'>POPULAR</h1>
       <div className='popularCards'>
       {
         popularMovies.map((movie , index) => {
           return  <Link key={index} style={{ textDecoration:'none' ,  color:'white'}} to={`/movie/${movie.id}`}>
           <div className='popularCard'>
             <img className='popularImg' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
             <div className='info'>
                  <div className='title'>
                    {movie.original_title}
                  </div>
                  <div className='dateAndVote'>
                   <p>{movie.release_date}</p>
                   <p>{movie.vote_average} <i className='fas fa-star'/> </p>
                  </div>
                  <div className='overviev'>
                   {movie.overview.slice(0,120)+"..."}
                  </div>
   
            </div>
   
           </div>
           </Link>

         
           
         })
       }
       </div>
    </div>
  )
}

export default Popular
