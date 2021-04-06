import axios from "axios";
import {setUsers, setFetchErr, setIsFetching, deleteUser, addUser, updateUserInStore, setUser} from "./bookReducer";

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            dispatch(setFetchErr(false))
            const response = await axios.post(`http://localhost:8008/api/users/get`)
            dispatch(setUsers(response.data))
        } catch (e) {
            dispatch(setFetchErr(true))
        } finally {
            dispatch(setIsFetching(false))
        }
    }
}

export const getCurrentUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            dispatch(setFetchErr(false))
            const response = await axios.get(`http://localhost:8008/api/users/get/${id}`);
            dispatch(setUser(response.data));
        } catch (e) {
            dispatch(setFetchErr(true));
        } finally {
            dispatch(setIsFetching(false));
        }
    }
}

export const removeUser = (id) => {
    return async (dispatch) => {
        try {
            const response = fetch(`http://localhost:8008/api/users/delete/${id}`, {
                method: 'GET',
            })
            dispatch(deleteUser(id));
        } catch (error) {
            const errorMessage = error.message;
        }
    }
}

export const createUser = (name, number) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8008/api/users/create`, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({name, number}),
            })
            const newUser = await response.json();
            dispatch(addUser(newUser));
        } catch (error) {
            const errorMessage = error.message;
        }
    }
}

export const updateUser = (name, number, _id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8008/api/users/update`, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({name, number, _id}),
            })
            const updatedUser = await response.json();
            console.log(updatedUser);
            dispatch(updateUserInStore(updatedUser))
        } catch (error) {
            const errorMessage = error.message;
        }
    }
}
