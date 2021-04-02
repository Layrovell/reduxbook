import axios from "axios";
import {setUsers} from "./bookReducer";

export const fetchUsers = () => {
    return async (dispatch) => {
        axios.post('http://localhost:8008/api/users/get')
            .then(response => {
                const users = response.data;
                dispatch(setUsers(users))
            })
            .catch(error => {
                const errorMessage = error.message;
            })
    }
}

export const removeUser = (id) => {
    return async (dispatch) => {
        try {
            const response = fetch(`http://localhost:8008/api/users/delete/${id}`, {
                method: 'GET',
            })
            return response.json();
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
            await response.json();
        } catch (error) {
            const errorMessage = error.message;
        }
    }
}

export const updateUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8008/api/users/update`, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify(id),
            })
            console.log(response)
            await response.json();
        } catch (error) {
            const errorMessage = error.message;
        }
    }
}
