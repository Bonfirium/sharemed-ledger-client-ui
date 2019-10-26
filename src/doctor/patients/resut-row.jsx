import React from 'react';
import { List, Image, Grid, Accordion, Icon, Container } from 'semantic-ui-react';

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
        const { pacientName, file, message, title, date, i } = this.props;

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
                                            {pacientName}
                                        </Container>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        {date}
                                    </Grid.Column>
                                    <Grid.Column width={2} />
                                </Grid.Row>
                            </Grid>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.open}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={1} />
                                <Grid.Column width={5}>
                                    <Container text>
                                        {message}
                                    </Container>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Image src={file} />
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