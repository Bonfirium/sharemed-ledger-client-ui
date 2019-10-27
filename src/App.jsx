import React from 'react';
import Patient from './patient';
import Doctor from './doctor';
import Reg from './reg';
import Log from './log';

export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        token: null,
        onReg: true,
        data: [],
      }
    }

    componentDidMount() {
      this.setState({
        token: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6IjVkYjRlNTQ5OTNkNmQ2NjViMDJkNTI3MSIsImV4cCI6MTU3NzMyMDI2NiwiaWF0IjoxNTcyMTM2MjY2fQ.e4CouOfpS5QbZHD_P7jdVdp3X-gZZ9Vr-nwto51PXpQ',
      })
    }

    async getData(data) {
      const response = await fetch('localhost:8000/chaincode/exec', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': this.state.token,
        },
        body: JSON.stringify(data),
      })

      this.setState({
        data: response.json()
      })
    }

    getToken() {
      const token = localStorage.getItem('token');
      this.setState({token})
    }

    render() {
      if (this.state.token) {
        return false ? <Patient/> : <Doctor />
      } else {
        return this.state.onReg ? <Reg /> : <Log />
      }
    }
}
