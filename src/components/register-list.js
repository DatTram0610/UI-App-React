import React from 'react';
import api from '../utilities/api';

class RegisterList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isLoading: false,
            error: ''
        }
    }

    componentDidMount() {
        this.setState({ loading: true });

        api.aGetUser()
            .then(response => {
                this.setState({ users: response.data, isLoading: false })
            })
            .catch(error => {
                this.setState({ error: error, isLoading: false })
            })
    }
    render() {
        const { users, isLoading, error } = this.state;

        if (isLoading) {
            return <p>Loading...</p>
        }

        if (error) {
            return <p>{error.message}</p>
        }
        return (
            <div>
                {users.map(user =>
                    <div key={user._id}>
                        <p>Name: {user.name} </p>
                        <p>Age: {user.age} </p>
                        <p>Email: {user.email} </p>
                    </div>
                )}
            </div>
        )
    }
}

export default RegisterList;