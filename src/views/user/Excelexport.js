import React from "react";
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
// import { Tooltip } from '@mui/material';
import { Button } from "react-bootstrap";
import { toast } from 'react-toastify';

class ExcelExport extends React.Component {

    exportToExcel = async (excelData, fileName) => {
        if (excelData.length > 0) {
            const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const fileExtension = '.xlsx';
            const ws = XLSX.utils.json_to_sheet(excelData);
            const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
            const excelBuffer = XLSX.write(wb, { boolType: 'xlsx', type: 'array' });
            const data = new Blob([excelBuffer], { type: fileType });
            FileSaver.saveAs(data, fileName, fileExtension);
            console.log("Debug 2:", this.props.excelData);
        }
        else {
            toast.error("No data for export");
            return
        }
    }
    render() {
        return (
            <>
                {/* <Tooltip title="Excel Export"> */}
                <Button variant="primary"
                    onClick={(e) => this.exportToExcel(this.props.excelData, this.props.fileName)} color="primary"
                // style={{ cursor: "pointer", fontSize: 14 }}
                >
                    Export
                </Button>
                {/* </Tooltip> */}
            </>
        )
    }
}
export default ExcelExport;

// const ExportExcel = ({excel})