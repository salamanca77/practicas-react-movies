import { Link } from 'react-router-dom'
import './Elementos.css'
import { getMoviesImg } from '../utils/getMoviesimg'

export function Elementos({ movie }) {

    const url = getMoviesImg(movie.poster_path, 300)

    console.log(url)
    // console.log(movie.title)
    
    return (
        <li className="elemento">
           
            <Link to={"/detalle/" + movie.id}>
                <img className="elemento-img" src={url} />
                <div>
                    {movie.title}
                </div>
            </Link>

        </li>)
}