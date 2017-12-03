import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

class Login extends Component {
    render() {
        return (
            <div className="ui main text container">
                <h1 className="ui header">Login</h1>

                <Form error={this.props.error} onSubmit={this.props.submit}>
                    <Form.Field required>
                        <label>E-mail</label>
                        <Form.Input name="email" placeholder='E-mail' onChange={this.props.handleChange} />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Form.Input name="pwd" type="password" placeholder='Password' onChange={this.props.handleChange}/>
                    </Form.Field>
                    <Message error
                        header='Error'
                        content='Wrong email/password or the account is not enabled.'
                    />
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Login;
