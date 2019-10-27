import React from 'react';
import { Table, Image, Button, Header, Modal, Container } from 'semantic-ui-react';

export default class ResultRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
        }
    }

    handleOpen() {
        this.setState({ modalOpen: true });
    }

    handleClose() {
        this.setState({ modalOpen: false }); 
    }

    renderDetailsModal() {
        const {doc, file, message, title} = this.props;

        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose.bind(this)}
            >
                <Modal.Header>{doc}</Modal.Header>
                <Modal.Content image scrolling>
                <Image size='medium' src={file} wrapped />

                <Modal.Description>
                    <Header>{title}</Header>
                    <Container text>{message}</Container>
                </Modal.Description>
                </Modal.Content>
                <Modal.Actions> 
                    <Button primary onClick={this.handleClose.bind(this)}>Close</Button>
                </Modal.Actions>
            </Modal>
        );
    }

    render () {
        const {doc, title, date, i } = this.props;

        return (
            <React.Fragment>
                <Table.Row>
                    <Table.Cell>{i + 1}</Table.Cell>
                    <Table.Cell>{title}</Table.Cell>
                    <Table.Cell>{doc}</Table.Cell>
                    <Table.Cell>{date}</Table.Cell>
                    <Table.Cell><Button primary onClick={this.handleOpen.bind(this)}>Show details</Button></Table.Cell>
                </Table.Row>
                {this.renderDetailsModal()}
            </React.Fragment>
        );
                    
    }
}