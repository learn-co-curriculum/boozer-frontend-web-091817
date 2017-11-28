import React from 'react';

class CocktailsNew extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      proportions: [{ name: '' }, { name: '' }]
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addField = e => {
    e.preventDefault();
    this.setState({ proportions: [...this.state.proportions, { name: '' }] });
  };

  handleProportionChange = (name, index) => {
    // make a copy of proportions object
    this.setState(prevState => {
      return {
        proportions: [
          ...prevState.proportions.slice(0, index),
          { name: name },
          ...prevState.proportions.slice(index + 1)
        ]
      };
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleCreateCocktail(this.state);
          }}
        >
          <input
            type="text"
            placeholder="Cocktail Name..."
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          {this.state.proportions.map((proportion, i) => (
            <p key={i}>
              <input
                placeholder="Ingredient name..."
                onChange={e => this.handleProportionChange(e.target.value, i)}
              />
            </p>
          ))}
          <button type="submit"> Create Cocktail </button>
        </form>
        <button onClick={this.addField} className="ui primary button">
          Add a proportion
        </button>
      </div>
    );
  }
}

export default CocktailsNew;
