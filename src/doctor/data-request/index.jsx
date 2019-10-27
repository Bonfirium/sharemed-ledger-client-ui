import React from 'react';
import { Icon, Button, Header, Modal } from 'semantic-ui-react';


export default class Results extends React.Component {

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
        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose.bind(this)}
            >
                <Modal.Description>
                    <Header>Enter user id</Header>
                </Modal.Description>
                <Modal.Actions> 
                    <Button color='green' onClick={this.handleClose.bind(this)}>Close</Button>
                </Modal.Actions>
            </Modal>
        );
    }

    render () {
        return (
           <React.Fragment>
                <Button
                    color='green'
                    inverted
                    onClick={this.handleOpen.bind(this)}
                >
                    <Icon name='plus' />
                </Button>
                {this.renderDetailsModal()}
           </React.Fragment>
        );
    }
}