import { useParams } from "react-router-dom"
import moviesDetalle from "../moviesDetalle.json"
import { useEffect } from "react"
import { useState } from "react"
import"../components/DetallePelicula.css" 
import { Spinner } from "../components/spinner"
import { getMoviesImg } from "../utils/getMoviesimg"

export function DetallePelicula() {

    const {Id} = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       
        setIsLoading(true)

        fetch("https://api.themoviedb.org/3/movie/" + Id, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWVlMGY1OTgxYmYzNGE0MDMzNTFmYzQ4MjUzNDVlOSIsInN1YiI6IjY0ODVkYmUzOTkyNTljMDBlMmY1NzJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zu26OYNbQpBzwy3Xqpr5dm2qgz7f1hlTZU_BGbs264"
            },
        },).then(result => result.json())
            .then(data => {
                setMovie(data)
                setIsLoading(false)
            })

    }, [Id])

    if(isLoading){
        return <Spinner />
    }

    
    const url = getMoviesImg(movie.poster_path, 500)
    
    return (
        <div className="detalle-pelicula">
            <img className="detalle-pelicula-img" src={url} alt={moviesDetalle.title} />
            <div className="detalle-pelicula-div">
                <p><strong>Title:</strong>{movie.title}</p>
                 <p><strong>Genres:</strong>{movie.genres.map((genre) => genre.name).join(', ')}</p>  
                <p className=""><strong>Description:</strong>{movie.overview}</p>
            </div>
        </div>
    )
}



















