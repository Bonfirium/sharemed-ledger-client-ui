import React from 'react';
import { List, Table } from 'semantic-ui-react';
import ResultRow from './resut-row';

export default class MedCenterRow extends React.Component {

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
        const { orgName, data } = this.props;
        return (
            <List.Item>
                {orgName}
                <Table striped>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>index</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Doctor</Table.HeaderCell>
                        <Table.HeaderCell>Creation date</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    {/* <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>

                    </Table.Body> */}
                <Table.Body>
                    {
                        data.map(({ doc, file, message, title, date }, i) => {
                            return (
                                <ResultRow
                                    doc={doc}
                                    file={file}
                                    message={message}
                                    title={title}
                                    date={date}
                                    i={i}
                                />
                            );
                        })
                    }
                </Table.Body>
                </Table>
            </List.Item>
        );
    }

}