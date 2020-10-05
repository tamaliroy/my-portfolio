import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const FormDetails = () => {
    // const [gridApi, setGridApi] = useState(null);
    // const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([]);

   useEffect(() => {
      axios.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json')
      .then(result => {
        // result = result.json();
        // setRowData(result);
        console.log(result.data);
        setRowData(result.data);
      })
   }, [])

   return (
    <div className="ag-theme-alpine my-grid">
    <AgGridReact
        rowData={rowData}>
        <AgGridColumn field="make" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
    </AgGridReact>
    </div>
   )
}

export default FormDetails;