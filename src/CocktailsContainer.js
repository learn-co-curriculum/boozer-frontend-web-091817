import React, { Component } from 'react';
import CocktailsList from './CocktailsList';
import CocktailsDetail from './CocktailsDetail';
import CocktailsNew from './CocktailsNew';

import { fetchCocktails, createCocktail } from './services/api';

class CocktailsContainer extends Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      selectedCocktail: {}
    };
  }

  componentDidMount() {
    fetchCocktails().then(res =>
      this.setState({ cocktails: res, selectedCocktail: res[0] })
    );
  }

  handleSelect = id => {
    const newCocktail = this.state.cocktails.find(
      cocktail => cocktail.id === id
    );
    this.setState({ selectedCocktail: newCocktail });
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
      <div className="ui grid container">
        <div className="sixteen wide column">
          <CocktailsNew handleCreateCocktail={this.handleCreateCocktail} />
        </div>
        {/*  Master "List of Things" */}
        <div className="four wide column">
          <CocktailsList
            handleSelect={this.handleSelect}
            cocktails={cocktails}
          />
        </div>

        {/*  Detail "One Thing"*/}
        <div className="twelve wide column">
          <CocktailsDetail cocktail={selectedCocktail} />
        </div>
      </div>
    );
  }
}

export default CocktailsContainer;
