import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
    console.log('Constructor: Component is being created');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: Syncing state with props');
    // Return null if no state updates are needed
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
    // Simulating an API call
    setTimeout(() => {
      this.setState({ data: 'Data fetched!' });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should the component re-render?');
    // Returning true means the component should update
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capturing some information from the DOM');
    // Example: Returning a scroll position
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
    // You can perform DOM operations here
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is being removed from the DOM');
    // Clean up operations
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError: An error has occurred');
    return { error };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch: Logging error information');
    console.error('Error:', error, 'Info:', info);
  }

  render() {
    console.log('Render: Rendering the component');
    if (this.state.error) {
      return <div>Error occurred: {this.state.error.toString()}</div>;
    }
    return (
      <div>
        <h1>React Component Lifecycle</h1>
        <p>{this.state.data || 'Loading data...'}</p>
      </div>
    );
  }
}

export default Lifecycle;
