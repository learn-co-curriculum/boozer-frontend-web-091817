import React, { Component } from 'react';
import CocktailsList from './CocktailsList';
import CocktailsDetail from './CocktailsDetail';
import CocktailsNew from './CocktailsNew';

import { fetchCocktails, fetchCocktail, createCocktail } from './services/api';

class CocktailsContainer extends Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      selectedCocktail: null
    };
  }

  componentDidMount() {
    fetchCocktails().then(res => this.setState({ cocktails: res }));
  }

  handleSelect = id => {
    fetchCocktail(id).then(cocktail => {
      this.setState({ selectedCocktail: cocktail });
    });
  };

  handleCreateCocktail = cocktailInfo => {
    console.log(cocktailInfo);
    createCocktail(cocktailInfo).then(res => {
      console.log('res', res);
    });
  };

  render() {
    const { cocktails, selectedCocktail } = this.state;
    return (
      <div className="ui grid">
        {/*  Master "List of Things" */}
        <div className="three wide column">
          <CocktailsList
            handleSelect={this.handleSelect}
            cocktails={cocktails}
          />
        </div>

        {/*  Detail "One Thing"*/}
        <div className="six wide column">
          {selectedCocktail ? (
            <CocktailsDetail cocktail={selectedCocktail} />
          ) : (
            <p> Select a cocktail from the list to see more info</p>
          )}
        </div>
        <div className="seven wide column">
          <CocktailsNew handleCreateCocktail={this.handleCreateCocktail} />
        </div>
      </div>
    );
  }
}

export default CocktailsContainer;
