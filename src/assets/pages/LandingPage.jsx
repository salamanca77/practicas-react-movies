import { ListaPeliculas } from "../components/ListaPeliculas";
import { Search } from "../components/Search"
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/usedebounce";


export function LandingPage() {
    const query = useQuery()
    const search = query.get('search')
    const debounceSearch = useDebounce(search, 300)

    return (

        <div>
            <Search />
            <ListaPeliculas key={debounceSearch} search={debounceSearch}/>
        </div>

    )


}