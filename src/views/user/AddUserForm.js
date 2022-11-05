import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class AddUserForm extends React.Component {
    state = {
        user: { email: "", first_name: "", last_name: "" }
    }
    handleChangeEmail = (event) => {
        let userTemp = this.state.user
        userTemp.email = event.target.value
        this.setState({
            user: userTemp
        }
        )
    }

    handleChangeFirstName = (event) => {
        let userTemp = this.state.user
        userTemp.first_name = event.target.value
        this.setState({
            user: userTemp
        }
        )
    }
    handleChangeLastName = (event) => {
        let userTemp = this.state.user
        userTemp.last_name = event.target.value
        this.setState({
            user: userTemp
        }
        )
    }
    render() {
        return (
            <Modal
                show={this.props.openAddForm}
                onHide={this.props.closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(event) => this.handleChangeEmail(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your First Name" onChange={(event) => this.handleChangeFirstName(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Last Name" onChange={(event) => this.handleChangeLastName(event)} />
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.props.closeModal()}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={() => this.props.handleSubmitAddNew(this.state.user)}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal >
        )
    }
}
export default AddUserForm;