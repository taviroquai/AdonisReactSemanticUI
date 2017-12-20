import React, { Component } from 'react';
import { Form, Message, Radio, Button, Divider, Table, Icon } from 'semantic-ui-react';

class Todos extends Component {

    applySort(items, column, direction) {
        let type;
        items = items.sort((a, b) => {
            type = a[column] === ''+a[column] ? 'string' : 'numeric';
            if (type === 'string') {
                return direction === 'ascending' ?
                    (a[column].toUpperCase() < b[column].toUpperCase() ? -1 : 1)
                    : (a[column].toUpperCase() > b[column].toUpperCase() ? -1 : 1);
            } else {
                return direction === 'ascending' ?
                    (a[column] < b[column] ? -1 : 1)
                    : (a[column] > b[column] ? -1 : 1);
            }
        });
        return items;
    }

    applyFilter(items, filter) {
        if (filter === 'active') {
            items = items.filter(item => !!item.complete);
        }
        return items;
    }

    render() {
        var items = this.applyFilter(this.props.items, this.props.filter);
        items = this.applySort(items, this.props.sort.column, this.props.sort.direction);
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

                { items.length === 0 ? null : (
                    <Table sortable compact celled definition>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell sorted={this.props.sort.column === 'id' ? this.props.sort.direction : null}
                                    onClick={(e) => this.props.handleSort('id')}
                                    >
                                    ID
                                </Table.HeaderCell>
                                <Table.HeaderCell sorted={this.props.sort.column === 'description' ? this.props.sort.direction : null}
                                    onClick={(e) => this.props.handleSort('description')}
                                    >
                                    Description
                                </Table.HeaderCell>
                                <Table.HeaderCell />
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            { items.map((item) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell collapsing>
                                        <Radio toggle checked={!!item.complete} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        { item.id }
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
                                <Table.HeaderCell colSpan='3'>
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
