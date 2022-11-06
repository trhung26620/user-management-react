import React from "react";
import UserTable from "./UserTable";
import './User.scss'
import axios from "axios";
import SearchUser from "./SearchUser";
import AdvanceBtn from "./AdvanceBtn";
import Paging from "./Paging";
class User extends React.Component {
    state = {
        listUsers: [],
        searchedUsers: [],
        searchValue: "",
        page: 1,
        userPerPage: 3,
        userListForDisplay: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        let temp = { id: 99, email: "rachel123.howell@reqres.in", first_name: "Rachel123", last_name: "Howell123" };
        res.data.data = [...res.data.data, temp]
        let startIndex = (this.state.page - 1) * this.state.userPerPage
        this.setState({
            listUsers: res && res.data.data ? res.data.data : [],
            searchedUsers: res && res.data.data ? res.data.data : [],
            userListForDisplay: res.data.data.slice(startIndex, startIndex + this.state.userPerPage)
        })
    }
    editUser = (user) => {
        let { listUsers, searchedUsers } = this.state
        let userIndex = listUsers.findIndex((element) => element.id === user.id);
        listUsers[userIndex] = user;
        this.setState({
            listUsers: listUsers,
        });
        this.filterEmail(this.state.searchValue)
    }
    deleteUser = (user) => {
        let searchedUsersTemp = [...this.state.searchedUsers];
        let listUsersTemp = [...this.state.listUsers];
        let userListForDisplay = [...this.state.userListForDisplay]
        searchedUsersTemp = searchedUsersTemp.filter(item => item.id !== user.id);
        listUsersTemp = listUsersTemp.filter(item => item.id !== user.id);
        userListForDisplay = userListForDisplay.filter(item => item.id !== user.id);
        this.setState({
            listUsers: [...listUsersTemp],
        });
        this.filterEmail(null, listUsersTemp, null);
    }
    filterEmail = (email = null, newList = null, page = null) => {
        let listUsers
        if (newList) {
            listUsers = newList;
        } else {
            listUsers = [...this.state.listUsers];
        }
        if (email != null) {
            this.setState({
                searchValue: email
            });
            listUsers = listUsers.filter(item => item.email.startsWith(email));
        } else {
            listUsers = listUsers.filter(item => item.email.startsWith(this.state.searchValue));
        }
        let startIndex;
        if (page) {
            startIndex = (page - 1) * this.state.userPerPage
            this.setState({
                page: page
            })
        } else {
            startIndex = (this.state.page - 1) * this.state.userPerPage
        }
        this.setState({
            searchedUsers: listUsers,
            userListForDisplay: listUsers.slice(startIndex, startIndex + this.state.userPerPage)
        });
    }
    sortWithFirstName = () => {
        let { userListForDisplay } = this.state;
        userListForDisplay = userListForDisplay.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
        this.setState({
            userListForDisplay: userListForDisplay
        });
    }
    sortWithId = () => {
        let { userListForDisplay } = this.state;
        userListForDisplay = userListForDisplay.sort((a, b) => (a.id > b.id) ? 1 : -1);
        this.setState({
            userListForDisplay: userListForDisplay
        });
    }
    addNewUser = (user) => {
        let { listUsers } = this.state
        user.id = Math.floor(Math.random() * 1000);
        this.setState({
            listUsers: [...listUsers, user],
        });
        this.filterEmail(this.state.searchValue, [...listUsers, user]);
    }
    importUser = (listUsers) => {
        this.setState({
            listUsers: listUsers
        })
        this.filterEmail(this.state.searchValue, listUsers);
    }
    render() {
        let { userListForDisplay } = this.state;
        return (
            <div>
                <div className="headComponent">
                    <div className="searchUser">
                        <SearchUser
                            filterEmail={this.filterEmail}
                        />
                    </div>
                    <div className="advBtn">
                        <AdvanceBtn
                            addNewUser={this.addNewUser}
                            listUsers={this.state.listUsers}
                            importUser={this.importUser}
                        />
                    </div>

                    {/* </span> */}
                </div>
                <div className="user">
                    <UserTable
                        listUsers={userListForDisplay}
                        editUser={this.editUser}
                        deleteUser={this.deleteUser}
                        sortWithFirstName={this.sortWithFirstName}
                        sortWithId={this.sortWithId}
                    />
                </div>
                <div className="paging">
                    <Paging
                        numOfUser={this.state.searchedUsers.length}
                        filterEmail={this.filterEmail}
                    />
                </div>
            </div>
        )
    }
}
export default User;