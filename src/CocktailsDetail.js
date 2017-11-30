import React from 'react';

const CocktailsDetail = ({ cocktail }) => {
  console.log(cocktail);
  return (
    <div>
      <h1>{cocktail.name}</h1>
      <h3>{cocktail.description}</h3>
      <p>{cocktail.instructions}</p>
      <h2>Ingredients</h2>
      <div>
        {cocktail.proportions.map((proportion, i) => (
          <p key={i}>
            - <span style={{ fontWeight: 'bold' }}>
              {proportion.amount}
            </span>{' '}
            {proportion.ingredient_name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CocktailsDetail;
