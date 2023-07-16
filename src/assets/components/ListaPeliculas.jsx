import { Elementos } from "./Elementos"
import "./ListaPeliculas.css"
import { useEffect, useState } from "react"
// import { Spinner } from "./Spinner"
import { Spinner } from "./spinner"
import InfiniteScroll from "react-infinite-scroll-component"
import { Empty } from "./Empty" 

const API_TOKEN = import.meta.env.VITE_BACKEND_API_TOKE;

export function ListaPeliculas({search}) {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {

    setIsLoading(true)

    const searchUrl = search
      ? '/search/movie?query=' + search + "&page=" + page
      : '/discover/movie?page=' + page

    fetch("https://api.themoviedb.org/3" + searchUrl, {
      headers: {
        Authorization: API_TOKEN
      },
    },).then(result => result.json())
      .then(data => {
        setMovies((prevMovies) => prevMovies.concat(data.results))
        setIsLoading(false)

      })


  }, [search, page])

    if(!isLoading && movies.length === 0){
      return <Empty />
    }
  
  return (
    <>
      <InfiniteScroll dataLength={movies.length} hasMore={true}

        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Spinner />}>

        <ul className="listaPeliculas-ul">
          {movies.map((movie) => <Elementos key={movie.id} movie={movie} />)}
        </ul>

      </InfiniteScroll>
    </>
  )

} 