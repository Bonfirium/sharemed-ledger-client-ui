import React from 'react';
import Pacients from './patients';
import DataRequest from './data-request';
import { Grid } from 'semantic-ui-react';


export default class Doctor extends React.Component {

    render () {
      return (
        <div class='records-container'>
        <div className='records-tab'>
        <Grid>
            <Grid.Row>
                <Grid.Column width="10" floated="left">
                  <Pacients/>
                </Grid.Column>
                <Grid.Column width="2" floated="left">  
                  <DataRequest/>
                </Grid.Column>
            </Grid.Row>
          </Grid>
</div>
</div>
      );
    }
}

