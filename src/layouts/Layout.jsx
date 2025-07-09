import React, { useEffect, useState } from "react";
import { Navbar } from "../components/home-page/Navbar";
import { Outlet, useLocation } from "react-router";
import { SearchResults } from "../components/home-page/SearchResults";

const Layout = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setSearch("");
    setResults(null);
  }, [location]);
  return (
    <div className="relative">
      <div className="relative z-50">
        <Navbar
          search={search}
          setSearch={setSearch}
          results={results}
          setResults={setResults}
        />
        <SearchResults results={results} search={search} />
      </div>
      <Outlet context={{ search, setSearch, results, setResults }} />
    </div>
  );
};

export default Layout;
