import React, { Component } from 'react';
import { Form, Message, Radio, Button, Divider, Table, Icon } from 'semantic-ui-react';

class Todos extends Component {
    render() {
        var filtered = this.props.items;
        if (this.props.filter === 'active') {
            filtered = this.props.items.filter(item => !!item.complete);
        }
        return (
            <div className="ui main text container">
                <h1 className="ui header">TodoMVC</h1>

                <Form error={this.props.error} onSubmit={this.props.submit}>
                    <Form.Field required>
                        <label>Description</label>
                        <Form.Input name="description" placeholder='Description'
                            value={this.props.form.description}
                            onChange={this.props.handleFormDescription} />
                    </Form.Field>
                    <Form.Field required>
                        <label>Complete</label>
                        <Radio toggle name="complete"
                            checked={!!this.props.form.complete}
                            onChange={this.props.handleFormComplete} />
                    </Form.Field>
                    <Message error
                        header='Error'
                        content='Todo is invalid.'
                    />
                    <Button type='submit'>Save</Button>
                    <Button onClick={(e) => this.props.newTodoItem(e)}>New</Button>
                </Form>

                <Divider />

                { this.props.items.length === 0 ? null : (
                    <Table compact celled definition>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell />
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            { filtered.map((item) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell collapsing>
                                        <Radio toggle checked={!!item.complete} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a role="button" style={{cursor: 'pointer'}}
                                            onClick={(e) => this.props.editTodoItem(item)}>
                                            { item.description }
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell textAlign='right'>
                                        <Button icon onClick={(e) => this.props.removeTodoItem(item)}>
                                            <Icon name='remove' />
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            )) }

                        </Table.Body>

                        <Table.Footer fullWidth>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan='2'>
                                    <Button floated='right' icon labelPosition='left' primary size='small'
                                        onClick={(e) => this.props.todosClearComplete()}
                                        >
                                        <Icon name='user' /> Clear completed
                                    </Button>
                                    <Button size='small' onClick={(e) => this.props.setFilter('all')}>All</Button>
                                    <Button size='small' onClick={(e) => this.props.setFilter('active')}>Active</Button>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                )}

            </div>
        );
    }
}

export default Todos;
