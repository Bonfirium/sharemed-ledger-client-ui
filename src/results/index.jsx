import React from 'react';
import { List, Image, Grid, Label } from 'semantic-ui-react';

const dataOrg1 = [{ orgName: 'medcent1', doc: 'doc1', file: 'crop.jpeg', message: 'you are fine...' }];
const base = [{ orgName: 'medcent1', data: dataOrg1 }];
export default class Results extends React.Component {

    render () {
        return (

            <List>
                {
                    base.map(({ orgName, data }) => {
                        return (
                            <List.Item>
                                {orgName}
                                <List.List>
                                    {
                                        data.map(({doc, file, message }, i) => {
                                            return (
                                                <List.Item>
                                                    {/* <List.Icon name='users' /> */}
                                                    <List.Content>
                                                        <Grid>
                                                            <Grid.Row>
                                                                <Grid.Column width={2} />
                                                                <Grid.Column width={1}>
                                                                    {i + 1}
                                                                </Grid.Column>
                                                                <Grid.Column width={3}>
                                                                    {doc}
                                                                </Grid.Column>
                                                                <Grid.Column width={4}>
                                                                    {message}
                                                                </Grid.Column>
                                                                <Grid.Column width={4}>
                                                                    <Image src={file} />
                                                                </Grid.Column>
                                                                <Grid.Column width={2} />
                                                            </Grid.Row>
                                                        </Grid>
                                                    </List.Content>
                                                </List.Item>
                                            );
                                        })
                                    }
                                </List.List>
                            </List.Item>
                        );
                    })
                }
            </List>
        );
    }
}