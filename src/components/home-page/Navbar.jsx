import { useNavigate } from "react-router";
import { Search } from "../../pages/Search";

export function Navbar({ search, setSearch,result, setResults }) {
  const navigate = useNavigate();
  return (
    <div className="w-full px-8 pt-2 absolute mb-5">
      <div className="flex items-center justify-between px-8 py-2 shadow-2xl bg-neutral-900  text-white rounded-xl z-45 ">
        <h1
          className="font-bold cursor-pointer"
          onClick={() => {
            navigate("/home");
          }}
        >
          Anime Website
        </h1>
        <Search search={search} setSearch={setSearch} setResults={setResults} result={result}/>

        <div> Profie </div>
      </div>
    </div>
  );
}
