import React from "react";
import Table from 'react-bootstrap/Table';
import './UserTable.scss'
import Button from 'react-bootstrap/Button';
import EditForm from "./EditForm";
// import Test from "./Test";
import Confirm from "./Confirm";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from "@fortawesome/free-solid-svg-icons";
// import Paging from "./Paging";

class UserTable extends React.Component {
    state = {
        isOpen: false,
        currentUser: {},
        delConfirm: false,
        // openAddForm: false
    }

    openModal = (user) => {
        let userTemp = { ...user };
        this.setState({
            isOpen: true,
            currentUser: userTemp
        })
    };
    openDelConfirm = (user) => {
        let userTemp = { ...user };
        this.setState({
            delConfirm: true,
            currentUser: userTemp
        })
    };
    closeModal = () => this.setState({ isOpen: false, delConfirm: false });
    // closeConfirm = () => this.setState({ delConfirm: false });
    handleSubmit = (user) => {
        this.props.editUser(user);
        this.closeModal();
        toast.success("Updated successfully!");
    }
    handleDeleteUser = () => {
        this.props.deleteUser(this.state.currentUser);
        this.setState({ delConfirm: false });
        toast.success("Deleted successfully!");
    }
    render() {
        let listUsers = this.props.listUsers
        return (
            <>
                <div className="userTable">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID <span onClick={() => this.props.sortWithId()} style={{ paddingLeft: '20px' }}><FontAwesomeIcon icon={faSort} /></span></th>
                                <th>Email</th>
                                <th>First Name <span onClick={() => this.props.sortWithFirstName()} style={{ paddingLeft: '20px' }}><FontAwesomeIcon icon={faSort} /></span></th>
                                <th>Last Name </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item['email']}</td>
                                        <td>{item['first_name']}</td>
                                        <td>{item['last_name']}</td>
                                        <td>
                                            <Button onClick={() => this.openModal(item)} style={{ color: "black", background: "yellow" }} variant="secondary" size="lg" active>
                                                Edit
                                            </Button>	&nbsp;
                                            <Button onClick={() => this.openDelConfirm(item)} style={{ background: "red" }} variant="secondary" size="lg" active>
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
                    {this.state.delConfirm ?
                        <Confirm
                            // closeConfirm={this.closeConfirm}
                            closeModal={this.closeModal}
                            delConfirm={this.state.delConfirm}
                            handleDeleteUser={this.handleDeleteUser}
                            currentUser={this.state.currentUser}
                        />
                        :
                        null
                    }
                </div>
                {/* <div className="paging">
                    <Paging
                    // numOfUser={this.state.searchedUsers.length}
                    />
                </div> */}
            </>
        )
    }
}
export default UserTable;