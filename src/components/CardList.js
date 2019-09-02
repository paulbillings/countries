import React from "react";
import Card from "./Card";

const CardList = ({ countries }) => {
	return(
		<div>
			{
				countries.map((user, i) => {
					return (
						<Card 
							key={countries[i].numericCode}
							id={countries[i].numericCode} 
							name={countries[i].name} 
							capital={countries[i].capital}
							flag={countries[i].flag}
							region={countries[i].region}
							population={countries[i].population}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;