import React from 'react';

const CocktailsList = props => {
  const cocktails = props.cocktails.map(cocktail => (
    <li onClick={() => props.handleSelect(cocktail.id)}>{cocktail.name}</li>
  ));
  return (
    <div>
      <ul>{cocktails}</ul>
    </div>
  );
};

export default CocktailsList;
