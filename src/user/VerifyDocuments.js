import React from 'react'
import './styles/VerifyDocuments.css'
import { MDBDataTable } from 'mdbreact'
function VerifyDocuments() {

    const setdata = () => {
        const data = {
            columns: [
                {
                    label: 'Documents',
                    field: 'Documents',
                    sort:'asc',
                },
                {
                    label: 'Image',
                    field: 'Image',
                    sort:'asc',
                },
                {
                    label: 'Action',
                    field: 'Action',
                    sort:'asc',
                }
            ],
            rows: []
        }

        data.rows.push({
            Documents: 'Vehicle documents',
            Image: <img className="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Vehicle documents',
            Image: <img className="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Vehicle documents',
            Image: <img className="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Vehicle documents',
            Image: <img className="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Vehicle documents',
            Image: <img className="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Vehicle documents',
            Image: <img className="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        return data; 
    }

    return (
        <div>
            <div className="head"> Welcome admin Dashboard</div>
            <div className="bottom">
              
                <MDBDataTable>
                data={setdata()}
                        className="px-3"
                            bordered
                            striped
                            hover
                </MDBDataTable>
                
            </div>
        </div>
    )
}

export default VerifyDocuments
 