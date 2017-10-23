import React from 'react';
import AddRegisterForm from './add-register-form';
import RegisterList from './register-list';
import api from '../utilities/api';

class RegisterForm extends React.Component {
    handleRegisterForm(project) {
        api.postUser(project)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        ;
    }

    render() {
        return (
            <div className="register-form">
                <h3>Register Form</h3>
                <AddRegisterForm addRegisterForm={this.handleRegisterForm.bind(this)} />
                <RegisterList />
            </div>
        );
    }
}

export default RegisterForm;