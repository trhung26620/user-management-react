import React from 'react';
import { read, utils } from 'xlsx';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

class ImportUser extends React.Component {

    constructor(props) {
        super(props);
        this.hiddenFileInput = React.createRef();
    }
    // state = {
    //     listUser: []
    // }
    handleImport = (event) => {
        const files = event.target.files;
        if (files.length) {
            if (files[0]['name'].split(".")[1] !== 'xlsx') {
                toast.error('Invalid File');
                return
            }
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;
                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    if (rows && rows.length > 0) {
                        this.props.importUser(rows);
                    }
                }
            }
            reader.readAsArrayBuffer(file);
            toast.success('Import successfully!');
            event.target.value = null;
        }
    }

    handleUpload = () => {
        this.hiddenFileInput.current.click();
    };
    render() {
        return (
            <>
                <Button variant="warning" onClick={this.handleUpload}>
                    Import
                </Button>
                <input ref={this.hiddenFileInput} className="d-none" type="file" onChange={this.handleImport} />
            </>
        )
    }
}

export default ImportUser;