import React from 'react';
import Counter from './components/Counter';
import './styles.css';

class AppNofu extends React.Component {
  state = {
    num: 0,
  };

  handleClick() {
    this.setState((state) => ({ num: state.num + 1 }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>Increment</button>
        <Counter number={this.state.num} />
      </>
    );
  }
}

export default AppNofu;
