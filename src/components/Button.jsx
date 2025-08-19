import React from 'react';

class Button extends React.Component {
  state = {
    hi: 5,
  };

  handleClick = (event) => {
    console.log('Clicked');
    this.setState({hi: this.state.hi + 1});
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;