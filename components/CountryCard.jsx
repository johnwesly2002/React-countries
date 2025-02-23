import React from 'react'
import { Link } from "react-router";

export default function CountryCard({name, region, capital,population, flag, data}) {
  return (
    <Link className="country-card" to={`/${name.common}`} state={data}>
    <div className="flag-container">
    <img src={flag} alt={name + ' Flag'} />
    </div>
    <div className="card-text">
      <h3 className="card-title">{name.common}</h3>
      <p>
        <b>Population: </b>
        {population.toLocaleString('en-IN')}
      </p>
      <p>
        <b>Region: </b>{region}
      </p>
      <p>
        <b>Capital: </b>{capital}
      </p>
    </div>
  </Link>
  )
}
