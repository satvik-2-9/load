import React,{Fragment,useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './styles/VerifyDocuments.css'
import { MDBDataTable } from 'mdbreact'
import  {Button} from 'react-bootstrap'
import { upload,update } from '../actions/authactions'
import axios from 'axios'

import {  getdriverDetails} from '../actions/authactions'

const  VerifyDocuments=({match})=> {

    const dispatch= useDispatch();
    const {driver,driver1}=useSelector(state=>state.driverdetails)
     const image=useSelector(state=>state.images)

    const driverId = match.params.id;
    const [obj,setobj]= useState({})

  useEffect(()=>{   
   
        
        
    dispatch(getdriverDetails(driverId)) 
},[dispatch,driverId])


const handleimagechange=async (e)=>{
const formdata=new FormData()
formdata.append('images',e.target.files[0])
const image= await axios.post('/api/admin/upload',formdata)

console.log(e.target.files[0]);

console.log("image",image.data)
  setobj({...obj,[e.target.name]:{url:image.data.path,filename:image.data.filename}})
//   console.log("obj",obj)

}



const onsubmithandler=(e)=>{
     e.preventDefault()
    //  setobj({...obj,[e.target.name]:{url:image.path,filename:image.filename}})
    console.log("objects",obj);
    
    dispatch(update(driver._id,obj))
    


}

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
            Image: <img src={driver1.RC_Photo?driver1.RC_Photo.url:''} ></img>,
            Action: <input type="file" name="RC_Photo" onChange={(e)=>handleimagechange(e)}  ></input>
        });
        
        data.rows.push({
            Documents: 'Driver Insurance',
            Image: <img src={driver1.Insurance_Photo?driver1.Insurance_Photo.url:''}></img>,
            Action: <input type="file" name="Insurance_Photo" onChange={(e)=>handleimagechange(e)}  ></input>
        });
        
        data.rows.push({
            Documents: 'Address Proof',
            Image: <img src={driver.Aadhar_Photo_Front?driver.Aadhar_Photo_Front.url:''}></img>,
            Action: <input type="file" name="Aadhar_Photo_Front" onChange={(e)=>handleimagechange(e)} ></input>
        });
        
        data.rows.push({
            Documents: 'Driver License Front',
            Image: <img src={driver.Driving_License_Photo?driver.Driving_License_Photo.url:''}></img>,
            Action: <input type="file" name="Driving_License_Photo" onChange={(e)=>handleimagechange(e)} ></input>
        });
        
        // data.rows.push({
        //     Documents: 'Driver License Back',
        //     Image: <img src=""></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        
        data.rows.push({
            Documents: 'Driver Image',
            Image: <img src={driver.Profile_Photo?driver.Profile_Photo.url:''}></img>,
            Action: <input type="file" name="Profile_Photo" onChange={(e)=>handleimagechange(e)}  ></input>
        });
        data.rows.push({
            Documents: 'Police Pic',
            Image: <img src=""></img>,
            Action: <input type="file"  onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Aadhar Front',
            Image: <img src={driver.Aadhar_Photo_Front?driver.Aadhar_Photo_Front.url:''}></img>,
            Action: <input type="file" name="Aadhar_Photo_Front" onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Aadhar Back',
            Image: <img src={driver.Aadhar_Photo_Back?driver.Aadhar_Photo_Back.url:''}></img>,
            Action: <input type="file" name="Aadhar_Photo_Back" onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Pancard',
            Image: <img src={driver.PAN_Photo?driver.PAN_Photo.url:''}></img>,
            Action: <input type="file" name="PAN_Photo_" onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Permit',
            Image: <img src=""></img>,
            Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        });
        // data.rows.push({
        //     Documents: 'Vehicle Documents',
        //     Image: <img src=""></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        // data.rows.push({
        //     Documents: 'Address proof',
        //     Image: <img src=""></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        data.rows.push({
            Documents: 'Vehicle Front',
            Image: <img src={driver1.Vehicle_Front_Photo?driver1.Vehicle_Front_Photo.url:''}></img>,
            Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Vehicle Back',
            Image: <img src=""></img>,
            Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Vehicle Left',
            Image: <img src=""></img>,
            Action: <input type="file" name="Vehicle_Front Photo" onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Vehicle Right',
            Image: <img src=""></img>,
            Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        });
        return data; 
    }
    return (
        
        <div>
            <div className="head"> Welcome admin Dashboard !</div>
           <form onSubmit={onsubmithandler} encType="multipart/form-data">
            <div className="bottom">
           
                <MDBDataTable

                            data={setdata()}
                            className="px-3"
                            bordered
                            striped
                            hover 
                ></MDBDataTable>
                <button type="submit"  >Upload</button>
            </div>
            </form>
            {/* variant="dark" className="butt"       */}
              </div>
    )
}

export default VerifyDocuments
 