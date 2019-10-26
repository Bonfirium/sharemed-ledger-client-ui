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
                    <Accordion className='result-title'>
                        <Accordion.Title
                            active={this.state.open}
                            onClick={this.handleClick}
                            // className='result-row'
                        >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column className="one wide column">
                                        <Icon name='dropdown' />
                                    </Grid.Column>
                                    <Grid.Column className="one wide column">
                                        {i + 1}
                                    </Grid.Column>
                                    <Grid.Column className="five wide column">
                                        <Container text>
                                            {title}
                                        </Container>
                                    </Grid.Column>
                                    <Grid.Column className="three wide column">
                                        <Container text>
                                            {pacientName}
                                        </Container>
                                    </Grid.Column>
                                    <Grid.Column className="three wide column">
                                        {date}
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.open}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column className="one wide column" />
                                <Grid.Column className="seven wide column">
                                    <Container text>
                                        {message}
                                    </Container>
                                </Grid.Column>
                                <Grid.Column className="one wide column">
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