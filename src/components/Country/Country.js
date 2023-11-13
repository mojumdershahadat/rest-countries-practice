import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, capital, population} = props.country;
    console.log(props)
    return (
        <div className='country-styles'>
           <h3>Name: {name.common}</h3> 
           <img className='flag-style' src={flags.png} alt="" />
           <p>Capital: {capital}</p>
           <p>Population: {population}</p>
        </div>
    );
};

export default Country;