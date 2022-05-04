import React, { useEffect } from 'react';

function Counter({ number }) {
  useEffect(() => {
    console.log('Component is mounted'); // printed when a component rendered

    return () => {
      console.log('This is unmounted'); // printed when something is removed like deleting counter component in app.js
    };
  }, [number]); // the number gets updated by clicking
  return <h1>{number} times</h1>;
}
// To use a lifecycle methods inside a function component we use a hook called useEffect is a callback and has an array of dependencies

export default Counter;
