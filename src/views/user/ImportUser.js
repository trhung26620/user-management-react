import React from 'react';
import { read, utils, writeFile } from 'xlsx';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class ImportUser extends React.Component {

    constructor(props) {
        super(props);
        this.hiddenFileInput = React.createRef();
    }
    handleImport = (event) => {
        const files = event.target.files;
        console.log("File:", files)
        // if (files.length) {
        //     const file = files[0];
        //     const reader = new FileReader();
        //     reader.onload = (event) => {
        //         const wb = read(event.target.result);
        //         const sheets = wb.SheetNames;

        //         if (sheets.length) {
        //             const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
        //             setMovies(rows)
        //         }
        //     }
        //     reader.readAsArrayBuffer(file);
        // }
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