import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
  }
  componentDidCatch(error, info) {
    console.log(info);
    console.log(info.componentStack);
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;
