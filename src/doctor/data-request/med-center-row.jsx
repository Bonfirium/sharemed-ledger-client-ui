import React from 'react';
import { List } from 'semantic-ui-react';
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

    onAccept(e, id) {
        e.preventDefault();
        this.props.onAccept(id)
    }

    onDismiss(e, id) {
        e.preventDefault();
        this.props.onDismiss(id)
    }

    render () {
        const { orgName, data } = this.props;
        return (
            <List.Item>
                {orgName}
                <List.List celled divided>
                    {
                        data.map(({ doc, id, message, title, date }, i) => {
                            return (
                                <ResultRow
                                    doc={doc}
                                    id={id}
                                    message={message}
                                    title={title}
                                    date={date}
                                    i={i}
                                    onAccept={() => this.onAccept(id)}
                                    onDismiss={() => this.onDismiss(id)}
                                />
                            );
                        })
                    }
                </List.List>
            </List.Item>
        );
    }

}