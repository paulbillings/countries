import React from "react";

const Card = ({ name, capital, numericCode, flag, region, population }) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="mw5 h4" alt="flag" src={flag} />
			<div>
				<h2>{name}</h2>
				<p><em>Capital:</em> {capital}</p>
				<p><em>Region:</em> {region}</p>
				<p><em>Population:</em> {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
			</div>
		</div>
	);
}

export default Card;

//To make population number more readable I found the following:
//https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    
