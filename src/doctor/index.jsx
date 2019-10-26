import React from 'react';
import Pacients from './patients';
import { Grid } from 'semantic-ui-react';


export default class Doctor extends React.Component {

    render () {
      return (
        <Grid>
            <Grid.Column width="10" floated="left">
              <Pacients/>
            </Grid.Column>
          </Grid>
      );
    }
}
