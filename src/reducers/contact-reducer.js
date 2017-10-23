
const defaultState = {
    contacts: []
};

export default (state=defaultState, action={}) => {
    switch (action.type) {
        case 'FETCH_CONTACTS-PENDNG': {
            return {
                ...state,
                contacts: []
            }
        }
        case 'FETCH_CONTACTS_FULFILLED': {
            return {
                ...state,
                contacts: action.payload
            }
        }
        case 'FETCH_CONTACTS_REJECTED': {
            return {
                ...state,
                contact: []
            }
        }
        default: 
            return state;
    }
}