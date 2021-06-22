import React, { Component } from 'react';
import FormDataComponent from './schoolform';
import './school.css';
class App extends Component {
  render() {
    return (
      <div>
      <div class="headerdiv">
        <h2 class="heading">Apni-Shala</h2></div>
        <FormDataComponent />
      </div>
    );
  }
}
export default App;