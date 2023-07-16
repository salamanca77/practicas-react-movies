import { useEffect, useState } from "react";
import "./Search.css"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {

    const query = useQuery()
    const search = query.get('search')

    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        setSearchText(search || "")
    }, [search])
    
    const handlerSubmit = (evento) => {
        evento.preventDefault();
        navigate('/?search=' + searchText)
    }

    return (
        <form className="search" onSubmit={handlerSubmit}>
            <div className="search-div">
                <input className="search-input"
                    type="text" value={searchText}
                    placeholder="Title"
                    aria-label="Search movies"
                    onChange={(evento) => {
                        const value = evento.target.value;
                        setSearchText(value);
                        navigate('/?search=' + value)
                    }} />

                <button className="search-button" type="submit" >
                    <FaSearch size="20" />
                </button>
            </div>
        </form>
    )
}