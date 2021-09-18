import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  getdriverDetails} from '../actions/authactions'

import '../App.css'
const Vehicle=({match})=>{
    const dispatch= useDispatch();
    const {driver1}=useSelector(state=>state.driverdetails)

    const driverId = match.params.id;

  useEffect(()=>{ 
 
    dispatch(getdriverDetails(driverId)) 
},[dispatch,driverId])


return (
    <Fragment>
    
     
               <Fragment>
                   <div className="my-5">
                       <h3>RC  </h3>
                       <h4> RC No{driver1.Vehicle_RC_Number}</h4>
                       <img src={driver1.RC_Photo?driver1.RC_Photo.url:''} alt={driver1.Vehicle_RC_Number} />
                       <hr />

                       <h3>Insurance </h3>
                       <h4> INSURANCE No{driver1.Vehicle_Insurance_Number}</h4>
                       <img src={driver1.Insurance_Photo?driver1.Insurance_Photo.url:''} alt={driver1.Vehicle_Insurance_Number} />
                       <h4>Expiry date{driver1.Insurance_Expiry_Date}</h4>
                       <hr />

                       <h3>Vehicle Photo </h3>
                       <img src={driver1.Vehicle_Front_Photo?driver1.Vehicle_Front_Photo.url:''} alt="not available"/>
                       <hr />

                       <h3> Account Details </h3>
                       <h4> Account No{driver1.Account_Number}</h4>
                       <h4> Bank Name{driver1.Bank_Name}</h4>
                       <h4> IFSC Code{driver1.IFSC_CODE}</h4>
                       <hr />

                       <img src={driver1.Passbook_Photo?driver1.Passbook_Photo.url:''}  alt="not available" />
                   </div>


                   </Fragment>
         
      
   </Fragment>
)
 
}





export default Vehicle