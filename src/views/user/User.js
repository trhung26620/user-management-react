import React from "react";
import UserTable from "./UserTable";
import './User.scss'
import axios from "axios";

class User extends React.Component {
    state = {
        listUsers: [
            // { id: "1", email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson" }
        ]
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUsers: res && res.data.data ? res.data.data : []
        }
        )
    }
    editUser = (user) => {
        let { listUsers } = this.state
        let indexUser = listUsers.findIndex((element) => element.id === user.id);
        listUsers[indexUser] = user;
        this.setState({
            listUsers: listUsers
        });
        console.log(this.state)
    }
    render() {
        // console.log("Debug 5:", this.state.listUsers);
        let { listUsers } = this.state;
        return (
            <div className="user">
                <UserTable
                    listUsers={listUsers}
                // editUser={this.editUser}
                />
            </div>
        )
    }
}
export default User;