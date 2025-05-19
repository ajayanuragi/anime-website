import { Search } from "../../pages/Search";

export function Navbar({ setResults }) {
  return (
    <div className="flex items-center justify-between px-8 py-2 mx-4 shadow-2xl bg-slate-950 text-white rounded-xl">
      <h1 className="font-bold">Anime Website</h1>
      <Search setResults={setResults} />
      <div> Profie </div>
    </div>
  );
}
