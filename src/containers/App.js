import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";


class App extends Component {
	constructor() {
		super();
		this.state = {
			countries: [],
			searchfield: ""
		}
	}

	componentDidMount() {
		fetch("https://restcountries.eu/rest/v2/all")
			.then(response => response.json())
			.then(users => this.setState({ countries: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const {countries, searchfield } = this.state;
		const filteredCountries = countries.filter(country => {
			return country.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!countries.length) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className="tc">
					<h1 className="f1">Countries</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList countries={filteredCountries} />
					</Scroll>
				</div>
			);	
		}
		
	}
	
}

export default App;