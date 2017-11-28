import React from 'react';

const CocktailsDetail = props => {
  return (
    <div>
      <h1>{props.cocktail.name}</h1>
      <h3>{props.cocktail.description}</h3>
      <p>{props.cocktail.instructions}</p>
    </div>
  );
};

export default CocktailsDetail;
