import React, { Component } from 'react';
import Booklist from '../containers/book_list';
import {connect} from 'react-redux';

export default  class App extends Component {
  render() {
    return (
      <div>
        <Booklist/>
      </div>
    );
  }
}

