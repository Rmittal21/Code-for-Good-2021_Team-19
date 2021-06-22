import React, { Component } from 'react';
import './facilitator.css';

import FormDataComponent from './facilitatorForm';

class facilitatorApp extends Component {
  render() {
    return (
      <div>
       <div class="headerdiv">
        <h2 class="heading">Apni-Shala</h2></div>
        <FormDataComponent />
        <div class="footerdiv">
        <p>@www.apnishala.org</p></div>
      </div>
    );
  }
}
export default facilitatorApp;