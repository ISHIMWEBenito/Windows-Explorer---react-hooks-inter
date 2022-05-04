import React from 'react';

class CounterNofu extends React.Component {
  componentDidMount() {
    // It runs when our app is rendered for the first time
    console.log('componentDidMount runs');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      console.log('componentDidUpdate runs');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmout runs');
  }

  render() {
    return <h1>{this.props.number} times</h1>;
  }
}

export default CounterNofu;
