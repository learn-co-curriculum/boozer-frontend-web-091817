import React from 'react';

class CocktailsNew extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      instructions: '',
      proportions: [{ name: '', quantity: '' }]
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addField = e => {
    e.preventDefault();
    this.setState({
      proportions: [...this.state.proportions, { name: '', quantity: '' }]
    });
  };

  handleProportionChange = (e, index) => {
    // make a copy of proportions object
    const input = e.target.name;
    const value = e.target.value;

    this.setState(prevState => {
      return {
        proportions: [
          ...prevState.proportions.slice(0, index),
          { ...prevState.proportions[index], [input]: value },
          ...prevState.proportions.slice(index + 1)
        ]
      };
    });
  };

  render() {
    return (
      <div className="ui form">
        <form
          onSubmit={e => {
            console.log('submitted');
            e.preventDefault();
            this.props.handleCreateCocktail(this.state);
          }}
        >
          <h2>Create a Cocktail</h2>

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Cocktail Name..."
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <label>Description</label>
            <textarea
              placeholder="Description..."
              rows={2}
              value={this.state.description}
              name="description"
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <label>Instructions</label>
            <textarea
              placeholder="Instructions..."
              rows={2}
              value={this.state.instructions}
              name="instructions"
              onChange={this.handleChange}
            />
          </div>

          <h3> Ingredients </h3>

          {this.state.proportions.map((proportion, i) => (
            <div key={i} className="fields">
              <div className="twelve wide field">
                <label>Ingredient Name</label>
                <input
                  name="name"
                  placeholder="Ingredient name..."
                  onChange={e => this.handleProportionChange(e, i)}
                />
              </div>
              <div className="four wide field">
                <label>Quantity</label>
                <input
                  name="quantity"
                  placeholder="Quantity..."
                  onChange={e => this.handleProportionChange(e, i)}
                />
              </div>
            </div>
          ))}
          <div className="field">
            <div
              className="ui basic blue circular icon button"
              onClick={this.addField}
            >
              <i className="plus icon" />
            </div>
          </div>
          <button className="ui large primary button" type="submit">
            Create Cocktail
          </button>
        </form>
      </div>
    );
  }
}

export default CocktailsNew;
