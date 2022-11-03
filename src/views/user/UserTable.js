import React from "react";
import Table from 'react-bootstrap/Table';
import './UserTable.scss'
import Button from 'react-bootstrap/Button';
import EditForm from "./EditForm";
import Test from "./Test";

class UserTable extends React.Component {
    state = {
        isOpen: false,
        currentUser: {}
    }

    openModal = (user) => {
        let currentUserTemp = user;
        this.setState({
            isOpen: true,
            currentUser: currentUserTemp
        })
        console.log("Debug 3:", this.state);
    };
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = (name) => {
        console.log("finish")
        // this.setState({ isOpen: true });
        this.closeModal()
    }
    // handleBtnEditUser = (user) => {
    //     this.props.editUser(user);
    // }
    render() {
        console.log('Debug 2:', this.state.currentUser);
        let listUsers = this.props.MyListUsers
        console.log('Debug4', this.props);
        return (
            <>
                <div className="userTable">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item['email']}</td>
                                        <td>{item['first_name']}</td>
                                        <td>{item['last_name']}</td>
                                        <td>
                                            <Button onClick={() => this.openModal(item)} style={{ color: "black", background: "yellow" }} variant="secondary" size="lg" active>
                                                Edit
                                            </Button>	&nbsp;
                                            <Button style={{ background: "red" }} variant="secondary" size="lg" active>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </Table>
                    {this.state.isOpen ?
                        <EditForm
                            closeModal={this.closeModal}
                            isOpen={this.state.isOpen}
                            handleSubmit={this.handleSubmit}
                            currentUser={this.state.currentUser}
                        />
                        :
                        null
                    }
                </div>
            </>
        )
    }
}
export default UserTable;