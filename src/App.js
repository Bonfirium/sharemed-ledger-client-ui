import React from 'react';
import './App.css';
import Results from './results/';
import { Grid, Tab } from 'semantic-ui-react';


function App() {
  const panes = [
    {
      menuItem: 'My records',
      render: () => 
        <Tab.Pane attached={false}>
            <Grid>
              <Grid.Column width="10" floated="left">
                <Results />
              </Grid.Column>
            </Grid>
        </Tab.Pane>,
    },
    {
      menuItem: 'Requests',
      render: () => <Tab.Pane attached={false}><React.Fragment>hi</React.Fragment></Tab.Pane>,
    },
  ]
  
  return (
    <Tab menu={{ secondary: true }} panes={panes} />
  );
}

export default App;

