import React from "react";
import Form from 'react-bootstrap/Form';

class SearchUser extends React.Component {
    handleOnChange = (event) => {
        this.props.filterEmail(event.target.value);
    }
    render() {
        return (
            // <Form className="mb-3">
            <Form.Control onChange={(event) => this.handleOnChange(event)} type="email" placeholder="Enter email" />
            // </Form>
        )
    }
}
export default SearchUser;