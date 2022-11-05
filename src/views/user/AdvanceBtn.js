import React from "react";
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import AddUserForm from './AddUserForm'
import ExcelExport from "./Excelexport";
import ImportUser from "./ImportUser";

class AdvanceBtn extends React.Component {
    state = {
        openAddForm: false,
        // ExcelExportData: 
    }
    closeModal = () => this.setState({ openAddForm: false });
    handleSubmitAddNew = (user) => {
        if (user && user.email && user.first_name && user.last_name) {
            this.props.addNewUser(user);
            this.setState({ openAddForm: false });
            toast.success("Added successfully!");
        } else {
            toast.error("Missing Data, Please try again!")
            return
        }
    }
    openModal = () => {
        this.setState({
            openAddForm: true,
        })
    };
    render() {
        return (
            <>
                {/* <Button variant="warning">
                    Import
                </Button>&nbsp; */}
                {/* <Button variant="primary" size="sm">
                    Export
                </Button>&nbsp; */}
                <ImportUser />&nbsp;
                <ExcelExport
                    excelData={this.props.listUsers}
                    fileName={"Users"} />&nbsp;
                <Button onClick={() => this.openModal()} variant="success">
                    Add new
                </Button>
                {this.state.openAddForm ?
                    <AddUserForm
                        closeModal={this.closeModal}
                        openAddForm={this.state.openAddForm}
                        handleSubmitAddNew={this.handleSubmitAddNew}
                    />
                    :
                    null
                }
            </>

        )
    }
}
export default AdvanceBtn;