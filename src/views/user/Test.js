import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class Test extends React.Component {
    // state = {
    //     isOpen: true
    // }
    // openModal = () => this.setState({ isOpen: true });
    // closeModal = () => this.setState({ isOpen: false });
    // handleSubmit = (name) => {
    //     console.log("finish")
    // }
    state = { name: "" }

    handleChange = (e) => this.setState({ name: e.target.value })
    render() {
        return (
            <Modal
                show={this.props.isOpen}
                onHide={this.props.closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal Form Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.name} placeholder="name input" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={() => this.props.handleSubmit(this.state.name)}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default Test;