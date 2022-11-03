import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class EditForm extends React.Component {
    // currentUser = this.props.currentUser
    state = {
        user: this.props.currentUser
        // user: { id: "1", email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson" }
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
    // this.setState({
    //     user: this.props.currentUser
    // })
    render() {
        console.log('debug: ', this.state)
        let selectedUser = this.state.user
        return (
            <Modal
                show={this.props.isOpen}
                onHide={this.props.closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={selectedUser.email} onChange={(event) => this.handleChangeEmail(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your First Name" value={selectedUser.first_name} onChange={(event) => this.handleChangeFirstName(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Last Name" value={selectedUser.last_name} onChange={(event) => this.handleChangeLastName(event)} />
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.props.closeModal()}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={() => this.props.handleSubmit(this.state.user)}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal >
        )
    }
}
export default EditForm;