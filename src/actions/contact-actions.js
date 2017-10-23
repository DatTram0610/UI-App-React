// import {contacts} from '../contact-data';
import { client } from './';

const url = '/api/user';

export function fetchContacts() {
    return dispatch => {
        dispatch({
            type: 'FETCH_CONTACTS',
            payload: client.get(url).then(response => {console.log(response.data); return response.data})
        })
    }
}