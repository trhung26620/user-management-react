import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Confirm extends React.Component {

    render() {
        let selectedUser = this.props.currentUser
        return (
            <Modal
                show={this.props.delConfirm}
                onHide={this.props.closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Do you want delete user with email: {selectedUser.email} ?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.closeModal()}>Close</Button>
                    <Button variant="primary" onClick={() => this.props.handleDeleteUser()}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default Confirm;