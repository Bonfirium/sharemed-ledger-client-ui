import React from 'react';
import { List, Button, Grid, Accordion, Icon, Container } from 'semantic-ui-react';

export default class ResultRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ open: !this.state.open })
      }

    render () {
        const {doc, message, title, date, i, onDismiss, onAccept } = this.props;

        return (
            <List.Item>
                <List.Content>
                    <Accordion>
                        <Accordion.Title
                            active={this.state.open}
                            onClick={this.handleClick}
                        >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={1}>
                                        <Icon name='dropdown' />
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        {i + 1}
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Container text>
                                            {title}
                                        </Container>
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Container text>
                                            {doc}
                                        </Container>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        {date}
                                    </Grid.Column>
                                    <Grid.Column width={1} />
                                    <Grid.Column width={1}>
                                        <Button color='green' onClick={onAccept} >Accept</Button>
                                    </Grid.Column>
                                    <Grid.Column width={1} />
                                    <Grid.Column width={1}>
                                        <Button color='red' onClick={onDismiss} >Dismiss</Button>
                                    </Grid.Column>
                                    <Grid.Column width={2} />
                                </Grid.Row>
                            </Grid>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.open}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={1} />
                                <Grid.Column width={8}>
                                    <Container text>
                                        {message}
                                    </Container>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Accordion.Content>
                    </Accordion>
                </List.Content>
            </List.Item>
        );
                    
    }
}