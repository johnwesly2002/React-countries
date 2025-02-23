import React from 'react'
import "./CountryDetailsShimmer.css";
export default function CountryDetailsShimmer() {
  return (
    <div className="country-details-container">
        <div className="country-details">
            <div className="img"></div>
            <div className="details-text-container">
                <div className='countryName'></div>
                <div className="details-text">
                    <div className="native-name" ></div>
                    <div className="native-name" ></div>
                    <div className="native-name" ></div>
                </div>
            </div>
        </div>
    </div>
  )
}
