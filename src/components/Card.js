import React from "react";

const Card = ({ name, capital, numericCode, flag }) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="mw5 h4" alt="flag" src={flag} />
			<div>
				<h2>{name}</h2>
				<p>{capital}</p>
			</div>
		</div>
	);
}

export default Card;