// import {contacts} from '../contact-data';
import { client } from './';

const url = '/api/user';

export function fetchContacts() {
    return dispatch => {
        dispatch({
            type: 'FETCH_CONTACTS',
            payload: client.get(url).then(response => { console.log(response.data); return response.data })
        })
    }
}

export function newContact() {
    return dispatch => {
        dispatch({
            type: 'NEW_CONTACT'
        })
    }
}

export function saveContact(contact) {
    return dispatch => {
        return dispatch({
            type: 'SAVE_CONTACT',
            payload: client.post(url, contact)
        })
    }
}

export function fetchContact(id) {
    return dispatch => {
        return dispatch({
            type: 'FETCH_CONTACT',
            payload: client.get(`${url}/${id}`)
        })
    }
}

export function updateContact(contact) {
    return dispatch => {
        return dispatch({
            type: 'UPDATE_CONTACT',
            payload: client.put(`${url}/${contact._id}`, contact)
        })
    }
}

export function deleteContact(id) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_CONTACT',
            payload: client.delete(`${url}/${id}`)
        })
    }
}