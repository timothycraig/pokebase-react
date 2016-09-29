import React, { Component } from 'react';

export default class RailsRedirect extends Component {
  componentDidMount() {
    debugger
    var currentRouteName = this.context.router.getCurrentPathname();
  }

  render() {


    return(
      <div></div>
    )
  }
}
