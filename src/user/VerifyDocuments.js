import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './styles/VerifyDocuments.css'
import  {Form,Row,Col,Card,Button} from 'react-bootstrap'
import { update } from '../actions/authactions'
import axios from 'axios'
import { useAlert } from 'react-alert'
import { UPDATE_IMAGES_RESET } from '../constants/authconstants'


import { updateUser, getdriverDetails} from '../actions/authactions'

const  VerifyDocuments=({match,history})=> {

    const dispatch= useDispatch();
    const alert=useAlert()

    const {driver}=useSelector(state=>state.driverdetails)
    const {isUpdated}=useSelector(state=>state.updateimages)

    const driverId = match.params.id;
    const [obj,setobj]= useState({})

  useEffect(()=>{   
   
        
        
    dispatch(getdriverDetails(driverId)) 
    if(isUpdated){
      
        alert.success('Profile updated successfully')
        history.push('/dashboard')
         }

    dispatch({
        type:UPDATE_IMAGES_RESET
      })
},[dispatch,driverId,alert,isUpdated,history])


const handleimagechange=async (e)=>{
const formdata=new FormData()
formdata.append('images',e.target.files[0])
const image= await axios.post('/api/admin/upload',formdata)

console.log(e.target.files[0]);

console.log("image",image.data)
  setobj({...obj,[e.target.name]:{url:image.data.path,filename:image.data.filename}})

}



const onsubmithandler=(e)=>{
     e.preventDefault()
    console.log("objects",obj);
    
    dispatch(update(driver._id,obj))
}
const Onclick = (e,id) => {
    e.preventDefault();

    //   const formData = new FormData();
    
    //   formData.set('status', status);

      dispatch(updateUser(id, "Approved"))
      history.push('/dashboard')
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
            Image: <img src={driver.RC_Photo?driver.RC_Photo.url:''} alt={driver.Vehicle_RC_Number} ></img>,
            Action: <input type="file" name="RC_Photo" onChange={(e)=>handleimagechange(e)}  ></input>
        });
        
        data.rows.push({
            Documents: 'Driver Insurance',
            Image: <img src={driver.Insurance_Photo?driver.Insurance_Photo.url:''} alt='png'></img>,
            Action: <input type="file" name="Insurance_Photo" onChange={(e)=>handleimagechange(e)}  ></input>
        });
        
        data.rows.push({
            Documents: 'Address Proof',
            Image: <img src={driver.Aadhar_Photo_Front?driver.Aadhar_Photo_Front.url:''} alt='png'></img>,
            Action: <input type="file" name="Aadhar_Photo_Front" onChange={(e)=>handleimagechange(e)} ></input>
        });
        
        data.rows.push({
            Documents: 'Driver License Front',
            Image: <img src={driver.Driving_License_Photo?driver.Driving_License_Photo.url:''}alt='png'></img>,
            Action: <input type="file" name="Driving_License_Photo" onChange={(e)=>handleimagechange(e)} ></input>
        });
        
        // data.rows.push({
        //     Documents: 'Driver License Back',
        //     Image: <img src=""alt='png'></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        
        data.rows.push({
            Documents: 'Driver Image',
            Image: <img src={driver.Profile_Photo?driver.Profile_Photo.url:''}alt='png'></img>,
            Action: <input type="file" name="Profile_Photo" onChange={(e)=>handleimagechange(e)}  ></input>
        });
        // data.rows.push({
        //     Documents: 'Police Pic',
        //     Image: <img src=""alt='png'></img>,
        //     Action: <input type="file"  onChange={(e)=>handleimagechange(e)} ></input>
        // });
        data.rows.push({
            Documents: 'Aadhar Front',
            Image: <img src={driver.Aadhar_Photo_Front?driver.Aadhar_Photo_Front.url:''}alt='png'></img>,
            Action: <input type="file" name="Aadhar_Photo_Front" onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Aadhar Back',
            Image: <img src={driver.Aadhar_Photo_Back?driver.Aadhar_Photo_Back.url:''}alt='png'></img>,
            Action: <input type="file" name="Aadhar_Photo_Back" onChange={(e)=>handleimagechange(e)} ></input>
        });
        data.rows.push({
            Documents: 'Pancard',
            Image: <img src={driver.PAN_Photo?driver.PAN_Photo.url:''}alt='png'></img>,
            Action: <input type="file" name="PAN_Photo_" onChange={(e)=>handleimagechange(e)} ></input>
        });
        // data.rows.push({
        //     Documents: 'Permit',
        //     Image: <img src=""alt='png'></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        // data.rows.push({
        //     Documents: 'Vehicle Documents',
        //     Image: <img src=""alt='png'></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        // data.rows.push({
        //     Documents: 'Address proof',
        //     Image: <img src=""alt='png'></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        data.rows.push({
            Documents: 'Vehicle Front',
            Image: <img src={driver.Vehicle_Front_Photo?driver.Vehicle_Front_Photo.url:''}alt='png'></img>,
            Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        });
        // data.rows.push({
        //     Documents: 'Vehicle Back',
        //     Image: <img src=""></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        // data.rows.push({
        //     Documents: 'Vehicle Left',
        //     Image: <img src=""></img>,
        //     Action: <input type="file" name="Vehicle_Front Photo" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        // data.rows.push({
        //     Documents: 'Vehicle Right',
        //     Image: <img src=""></img>,
        //     Action: <input type="file" onChange={(e)=>handleimagechange(e)} ></input>
        // });
        return data; 
    }
    return (
        
    <div className="wrapper2">
            {/* <div className="head"> Welcome admin Dashboard !</div>
           <form onSubmit={onsubmithandler} encType="multipart/form-data">
            <div className="bottom">
           
                <MDBDataTable

                            data={setdata()}
                            className="px-3"
                            bordered
                            striped
                            hover 
                ></MDBDataTable>
                <Button type="submit"  variant="dark" className="butt"    >Upload</Button>
                <Button   variant="dark" className="butt"  onClick={(e)=>{Onclick(e,driver._id)}}    >Verify</Button>

            </div>
            </form> */}
            <div className="first">
                <div className="a">
                <img src={driver.Profile_Photo ? driver.Profile_Photo.url : ''} alt='png'></img>
                </div>
                <div className="b">
                    <div>
                        <div className="s" > <div className="ff driver" >Driver ID:  </div><div className="ssa"><button className="bt">Edit icon</button></div> </div> 
                        <div className="s" > <div className="ff">Name: </div><div className="ssb"><button className="bt">Edit icon</button></div> </div>
                        <div className="s" > <div className="ff">Mobile Number:</div><div className="ssc"><button className="bt">Edit icon</button></div> </div>
                        <div>Alternate Number: </div>
                        <div>Emergency Number: </div> 
           
                   
                  </div>
                </div>
                <div className="c"><ul><li className="driver">Vehicle number: </li> <li className="driver">Vehicle Type: </li> <li className="driver">Vehicle Sub:</li></ul></div>
            </div>
            <div className="second">
                <div className="a">
                    <img src={driver.PAN_Photo?driver.PAN_Photo.url:''}alt='png'></img>
                </div>
                <div className="b">
                <Form>
                    <div className="wrap">
                     <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Account Number: 
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="plaintext" readOnly controlId="formPlaintext" />
                        </Col>
                     </Form.Group>
                     <button className="bt">Edit icon</button>
                    
                   </div>
                    <div className="wrap">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Bank Name: 
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password"  />
                        </Col>
                            </Form.Group>
                            <button className="bt">Edit icon</button>
                    </div>
                    <div className="wrap">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        IFSC Code: 
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password"  />
                        </Col>
                            </Form.Group>
                            <button className="bt">Edit icon</button>
                    </div>
                    </Form>
                </div>
            </div>
            <div className="third">
                <div className="a">
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Aadhar</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <Button variant="light"> <div className="clr"> Upload Icon</div></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Pan Card</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <Button variant="light"><div className="clr"> Upload Icon</div></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Driving License</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <Button variant="light"><div className="clr"> Upload Icon</div></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>RC</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <Button variant="light"><div className="clr"> Upload Icon</div></Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="b">
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Insurance</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                            <div className="but">
                            <Button variant="light" className="ex">Expiry Date</Button>
                            <Button variant="light"><div className="clr"> Upload Icon</div></Button>
                            </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Vehicle Front</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <Button variant="light"><div className="clr"> Upload Icon</div></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Vehicle Back</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <Button variant="light"><div className="clr"> Upload Icon</div></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Vaccine Certificate</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <Button variant="light"><div className="clr"> Upload Icon</div></Button>
                    </Card.Body>
                    </Card>  
                </div>
                <div className="c">
                    <button className="btm">Approve</button>
                </div>
    
            </div>
           
    
        </div>
    )
}

export default VerifyDocuments
 