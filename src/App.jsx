import React from 'react';
import Patient from './patient';
import Doctor from './doctor';

export default class App extends React.Component {
    render() {
      return (

              true ? <Patient/> : <Doctor />

      );
    }
}
