import React, { useEffect, useState } from 'react'
import countriesData from '../CountriesData';
import CountryCard from './CountryCard';
import CountriesListShimmer from './CountriesListShimmer';
import useFilter from '../hooks/useFilter';
export default function CountriesList({query}) {
    const[data, setData] = useState([]);
    const filteredData = useFilter(data, (item) => item.name.common.toLowerCase().includes(query) || item.region.toLowerCase().includes(query));
    console.log("function",filteredData);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((resp) => setData(resp))
    },[])

  return (
     data.length === 0 ?( <CountriesListShimmer />) : (
    <div className="countries-container">
    {filteredData.map((country) => (
        <CountryCard
        key={country.name.common}
        region={country.region}
        name = {country.name}
        capital={country.capital?.[0]}
        population={country.population}
        flag = {country.flags.svg}
        data = {country}
        />
    ))}
    </div>))
}
