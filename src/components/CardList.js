import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	return(
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={robots[i].numericCode}
							id={robots[i].numericCode} 
							name={robots[i].name} 
							capital={robots[i].capital}
							flag={robots[i].flag}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;