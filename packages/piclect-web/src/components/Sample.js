import React, { Component } from 'react';

class Sample extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //throw new Error('hoge');
  }
  render() {
    //console.log(hoge);
    throw new Error('nono');
    return (
      <div onClick={this.handleClick}>
        jpij
      </div>
    )
  }
}

export { Sample };
