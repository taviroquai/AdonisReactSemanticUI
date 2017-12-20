import Store from 'react-observable-store';

export const loginEmail = (value) => {
    Store.update('login', { email: value });
};

export const loginPwd = (value) => {
    Store.update('login', { pwd: value });
};

export const loginError = (value) => {
    Store.update('login', { error: value });
};

export const logout = () => {
    Store.update('profile', { user: false });
};

export const setTodosSort = (column) => {
    var direction = Store.get('todos.sort.direction');
    direction = direction === 'ascending' ? 'descending' : 'ascending';
    Store.update('todos', {
        sort: {column: column, direction: direction}
    });
}

export const loginSubmit = (cb) => {
    var auth_token = btoa(Store.get('login.email')+':'+Store.get('login.pwd'));
    var endpoint = Store.get('server.endpoint');
    fetch(endpoint + '/login', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + auth_token
        }
    })
    .then(res => res.json())
    .then((data) => {
        if (data.success) {
            cb(auth_token);
            profileGetUser(auth_token);
        } else {
            Store.set('login.error', true);
        }
    });
}

export const profileUser = (value) => {
    Store.update('profile', { user: value });
};

export const profileGetUser = (auth_token) => {
    var endpoint = Store.get('server.endpoint');
    fetch(endpoint + '/user', {
        headers: {
            'Accept': 'application/json, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + auth_token
        }
    })
    .then(res => res.json())
    .then((data) => {
        if (data.success) {
            Store.set('profile.user', data.user);
        }
    });
};

export const todosFindAll = () => {
    Store.update('todos', {loading: true});
    var endpoint = Store.get('server.endpoint');
    fetch(endpoint + '/todo', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        Store.update('todos', {loading: false});
        if (data.success) {
            Store.set('todos.items', data.items);
        }
    }).catch(err => {
        Store.update('todos', {loading: false});
    })
};

export const todosEditItem = (todo) => {
    Store.update('todos', {form: todo});
};

export const todosFormDescription = (value) => {
    Store.set('todos.form.description', value);
};

export const todosFormComplete = (value) => {
    Store.set('todos.form.complete', value);
};

export const todosSubmit = () => {
    Store.update('todos', {loading: true, error: false});
    var endpoint = Store.get('server.endpoint');
    fetch(endpoint + '/todo', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Store.get('todos.form'))
    })
    .then(res => res.json())
    .then((data) => {
        Store.update('todos', {loading: false});
        if (data.success) {
            todosFindAll();
        } else {
            Store.set('todos.error', true);
        }
    });
}

export const todosSetFilter = (value) => {
    Store.set('todos.filter', value);
};

export const todosItemRemove = (todo) => {
    Store.update('todos', {loading: true});
    var endpoint = Store.get('server.endpoint');
    fetch(endpoint + '/todo/'+todo.id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        Store.update('todos', {loading: false});
        if (data.success) {
            todosFindAll();
        }
    });
}

export const todosClearComplete = () => {
    Store.update('todos', {loading: true});
    var endpoint = Store.get('server.endpoint');
    fetch(endpoint + '/batch/todo/clear/complete', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => {
        Store.update('todos', {loading: false});
        if (data.success) {
            todosFindAll();
        }
    });
}
