import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

export default class Reg extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pass: '',
        }
    }

    onChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    onSubmit = (e) => {
        const { onSubmit } = this.props;
        e.preventDefault();
      }

    render () {
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field >
                        <label>Email</label>
                        <Input placeholder='Email' name="email" onChange={(e) => this.onChange(e)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input placeholder='Password' type="password" name="pass"  onChange={(e) => this.onChange(e)}/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <Button>On Reg</Button>
            </React.Fragment>
        );
                    
    }
}