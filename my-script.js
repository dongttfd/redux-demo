let { createStore } = Redux;
// Store
// structure {  users: [ user1, user2], tickets: [],  }

const user1 = {name: 'anh', job: 'dev'};
const user2 = {name: 'my', job: 'tester'};

// actions
// const addUserAction = { type: 'Add User', payload: { user: user1 } };
const delUserAction = { type: 'Delete User', payload: { user: user1 } };

const AddUser = (payload) => ({ type: 'Add User', payload })

// reducer
let id = 1;
const userReducer = (state, action) => {
    if (action.type === 'Add User') {
        const user = { ...action.payload.user, id };
        id++;
        state.users.push(user);

        return state;
    }

    if (action.type === 'Delete User') {
        state.users.push(action.payload.user);
        
        state.users = state.users.filter(u => u.name !== action.payload.user.name);
        return state;
    }
    return state;
}

const initStore = () => ({  users: [] });
const store = createStore(userReducer, initStore() );

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(addUserAction);
// store.dispatch(delUserAction);

// console.log('del',store.getState());


const addUserFunc = () => {
    store.dispatch(AddUser({user: user1}));
}
