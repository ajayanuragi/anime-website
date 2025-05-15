import { Search } from "../../pages/Search";

export function Navbar({setResults}){
    return(
        <div className="flex items-center justify-between px-8 py-4 m-4 border  rounded-xl">
            <h1 className="font-bold">Anime Website</h1>
            <Search setResults={setResults}/>
        </div>
    )
}