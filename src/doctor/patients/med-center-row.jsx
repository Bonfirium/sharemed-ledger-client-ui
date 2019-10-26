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

    render () {
        const { orgName, data } = this.props;
        return (
            <List.Item>
                {orgName}
                <List.List celled divided>
                    {
                        data.map(({ pacientName, file, message, title, date }, i) => {
                            return (
                                <ResultRow
                                    pacientName={pacientName}
                                    file={file}
                                    message={message}
                                    title={title}
                                    date={date}
                                    i={i}
                                />
                            );
                        })
                    }
                </List.List>
            </List.Item>
        );
    }

}