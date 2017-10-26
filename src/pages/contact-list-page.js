import React from 'react';
import { connect } from 'react-redux';

import { fetchContacts, deleteContact } from '../actions/contact-actions';
import ContactList from '../components2/contact-list';

class ContactListPage extends React.Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        return (
            <div>
                <h1> List of Contacts </h1>
                <ContactList contacts={this.props.contacts} deleteContact={this.props.deleteContact}/>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contactStore.contacts
    }
}

export default connect(mapStateToProps, { fetchContacts, deleteContact })(ContactListPage);