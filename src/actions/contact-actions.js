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