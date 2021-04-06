const SET_USERS = 'SET_USERS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FETCH_ERR = 'SET_FETCH_ERR';
const DELETE_USER = 'DELETE_USER';
const ADD_USER = 'ADD_USER';
const UPDATE_USER = 'UPDATE_USER';
const SET_USER = 'SET_USER';

const defaultState = {
    items: [],
    isFetching: true,
    isFetchErr: false,
    user: '',
}

export default function bookReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                items: action.payload.items,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        case SET_FETCH_ERR:
            return {
                ...state,
                isFetchErr: action.payload,
            }
        case DELETE_USER:
            return {
                ...state,
                items: state.items.filter(el => el._id !== action.payload),
            }
        case ADD_USER:
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        case UPDATE_USER:
            let newList = state.items.map(user => {
                if (user._id === action.payload._id) {
                    return {...action.payload}
                }
                return user;
            });
            return {
                ...state,
                items: newList,
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload.item,
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});

export const setIsFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool,
});

export const setFetchErr = (bool) => ({
    type: SET_FETCH_ERR,
    payload: bool,
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id,
});

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

export const updateUserInStore = (user) => ({
    type: UPDATE_USER,
    payload: user,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});
