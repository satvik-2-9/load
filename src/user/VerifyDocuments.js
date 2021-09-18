import React from 'react'
import './styles/VerifyDocuments.css'
import { MDBDataTable } from 'mdbreact'
import  {Button} from 'react-bootstrap'
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
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Driver Insurance',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Address Proof',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Driver License Front',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Driver License Back',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        
        data.rows.push({
            Documents: 'Driver Image',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Police Pic',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Aadhar Front',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Aadhar Back',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Pancard',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Permit',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Vehicle Documents',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Address proof',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Vehicle Front',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Vehicle Back',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Vehicle Left',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        data.rows.push({
            Documents: 'Vehicle Right',
            Image: <img src="https://partners.olacabs.com/public/img/type2.98e5661.png" ></img>,
            Action: <input type="file" ></input>
        });
        return data; 
    }

    return (
        <div>
            <div className="head"> Welcome admin Dashboard !</div>
            <div className="bottom">
              
                <MDBDataTable
                            data={setdata()}
                            className="px-3"
                            bordered
                            striped
                            hover
                ></MDBDataTable>
                <Button variant="dark" className="butt">Upload</Button>
            </div>
        </div>
    )
}

export default VerifyDocuments
 