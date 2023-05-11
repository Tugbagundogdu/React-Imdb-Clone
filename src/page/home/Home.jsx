import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom' 
import './home.css'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"


const Home = () => {

  const [isLoading , setİsLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() =>{
      setİsLoading(false)
    },1500)
  },[])

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
    <>
    
    <div>
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
    >
     {
      popularMovies?.map((movie , index) => { 
        return  <Link key={index} style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
        <div className="posterImage">
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
        </div>
        <div className="posterImage__overlay">
            <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
            <div className="posterImage__runtime">
                {movie ? movie.release_date : ""}
                <span className="posterImage__rating">
                    {movie ? movie.vote_average :""}
                    <i className="fas fa-star" />{" "}
                </span>
            </div>
            <div className="posterImage__description">{movie ? movie.overview : ""}</div>
        </div>
    </Link>
      })
    }
    
   </Carousel>
   </div>

   {
        isLoading ?

      <div className='skeleton'>
      <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={300} duration={2} />
      </SkeletonTheme>
       </div>
       
       :
       <>

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

       </>
   }
  
   

    </>
  )
  }
export default Home

