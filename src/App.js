import React from 'react';
import './css/index.css';
import Results from './results/';
import ShareRequest from './share-request/';
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
      render: () =>
        <Tab.Pane attached={false}>
          <Grid>
              <Grid.Column width="10" floated="left">
                <ShareRequest/>
              </Grid.Column>
            </Grid>
        </Tab.Pane>,
    },
  ]
  
  return (
        <div class='records-container'>
                <div class='records-tab'>
                   <Tab  menu={{ secondary: true }} panes={panes} />
                </div>
        </div>
  );
}

export default App;

