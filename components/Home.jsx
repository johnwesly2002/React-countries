import React, { useContext, useState } from 'react'
import "../App.css";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { ThemeContext } from '../contexts/ThemeContext';
export default function Home() {
  const[query, setQuery] = useState('');
  const[isDark] = useContext(ThemeContext);
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
    <div className="search-filter-container">
      <SearchBar setQuery={setQuery} />
      <SelectMenu setQuery={setQuery} />
    </div>
    <CountriesList query={query} />
  </main>
  )
}
