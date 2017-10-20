import React from 'react';

class AddRegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newRegister: {}
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.refs.name.value === "" || this.refs.email.value === "" || this.refs.email.value ==="") {
            alert('Please complete form');
        }
        else {
            this.setState({newRegister: {
                name: this.refs.name.value,
                email: this.refs.email.value,
                age: this.refs.age.value
            }}, function() {
                this.props.addRegisterForm(this.state.newRegister);
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>Add Register Form</h3>
                    <div>
                        <label>Name: </label>
                        <input type="text" ref="name" />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" ref="email" />
                    </div>
                    <div>
                        <label>Age: </label>
                        <input type="number" ref="age" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddRegisterForm;