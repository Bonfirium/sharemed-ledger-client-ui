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

    render () {
        const {doc, file, title, pacientName, resultId, date, message} = this.props.patientData;

        return (
            <React.Fragment>
                <Table.Row>
                    {/* <Table.Cell>{i + 1}</Table.Cell> */}
                    <Table.Cell>{title}</Table.Cell>
                    <Table.Cell>{doc}</Table.Cell>
                    <Table.Cell>{date}</Table.Cell>
                    {/* <Table.Cell><Button primary onClick={this.handleOpen.bind(this)}>Show details</Button></Table.Cell> */}
                </Table.Row>
            </React.Fragment>
        );
                    
    }
}