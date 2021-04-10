import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import axios from 'axios';
import { Button } from 'react-bootstrap'

const UsersData = () => {
    const [accountStatus, setAccountStatus] = useState([])
    const [page, setPage] = useState(0);
    const countPerPage = 3;

    const columns = [
        {
          name: 'Hospital ID',
          selector: 'id',
          sortable: true,
        },
        {
          name: 'Generated Id',
          selector: 'code',
          sortable: true
        },
        {
          name: 'Date of Birth',
          selector: 'patients_dob',
          sortable: false
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: false
        },
        {
            name: 'Institution Name',
            selector: 'name_of_institution',
            sortable: true
        },
        {
            name: 'City',
            selector: 'city',
            sortable: true
        },
        {
            name: 'Country',
            selector: 'country',
            sortable: true
        },
        {
            name: "Options",
            sortable: false,
            cell: d => <div><a href={'demography/share/'+d.code}><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="invoice-row-4996-send-icon" className="cursor-pointer feather feather-send"><line data-v-9a6e255c="" x1="22" y1="2" x2="11" y2="13"></line><polygon data-v-9a6e255c="" points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a><a href={'demography/view/'+d.code}><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="invoice-row-4996-preview-icon" className="mx-1 feather feather-eye"><path data-v-9a6e255c="" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle data-v-9a6e255c="" cx="12" cy="12" r="3"></circle></svg></a><a href={'demography/edit/'+d.code}><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path data-v-9a6e255c="" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path data-v-9a6e255c="" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a>
            </div>
        }
      ];

    /*useEffect(() => {
        fetch("http://localhost:4000/accounts")
            .then(response => response.json())
            .then((json) => setAccountStatus(json))
            accounts();
    }, [page]);*/

    const accounts = () => {
        axios.get(`http://localhost:4000/question?page=${page}&per_page=${countPerPage}`).then(response => {
            setAccountStatus(response.data);
        }).catch(err => {
            setAccountStatus([]);
        });
    }

    let data = accountStatus.data;
    const tableData = { columns, data };

    useEffect(() => {
        accounts();
    }, [page]);

    return (
        <>
            <div className="card">
                <a href="/demography"><Button className="position-right-dash">Add New</Button></a>
                <DataTableExtensions {...tableData}>    
                <DataTable
                    columns={columns}
                    data={accountStatus.data}
                    highlightOnHover
                    pagination
                    title="Patients List"
                    paginationServer
                    searchPlaceholder
                    search
                    paginationTotalRows={accountStatus.total}
                    paginationPerPage={countPerPage}
                    paginationComponentOptions={{
                        noRowsPerPage: true
                    }}
                    onChangePage={page => setPage(page-1)}  
                    defaultSortField="id"
                    defaultSortAsc={false}                      
                    PageLength={3}                
                    /> 
                    </DataTableExtensions>
            </div>
        </>
    );
};

export default UsersData;