const SET_USERS = 'SET_USERS';
const SET_USER = 'SET_USER';


const defaultState = {
    users: [],
}

export default function bookReducer(state = defaultState, action) {
    switch (action.type) {

    }
}


export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});