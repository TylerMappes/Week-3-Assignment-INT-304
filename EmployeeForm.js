import React from 'react';
import './EmployeeForm.css'; // Import CSS file

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '',
            email: '',
            title: '',
            department: '',
            employeeNumber: ''
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted:', this.state);
        this.props.onSubmit(this.state); // Passing state to parent component onSubmit handler
        this.setState({ name: '', 
            email: '', 
            title: '', 
            department: '',
            employeeNumber: ''
         });
    }

    render() {
        return (
            <form className="employee-form" onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="input-field"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="input-field"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="input-field"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Department:
                        <input
                            type="text"
                            name="department"
                            value={this.state.department}
                            onChange={this.handleChange}
                            className="input-field"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Employee Number:
                        <input
                        type="text"
                        name="employeeNumber"
                        value={this.state.employeeNumber}
                        onChange={this.handleChange}
                        className="input-field"
                        />
                    </label>
                </div>
                <div>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        );
    }
}

export default EmployeeForm;
