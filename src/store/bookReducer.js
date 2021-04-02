const SET_USERS = 'SET_USERS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FETCH_ERR = 'SET_FETCH_ERR';

const defaultState = {
    items: [],
    isFetching: true,
    isFetchErr: false,
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
