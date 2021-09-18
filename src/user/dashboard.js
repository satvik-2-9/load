import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allUsers } from '../actions/authactions'
import { MDBDataTable } from 'mdbreact'

import '../App.css'
import {Link} from 'react-router-dom'
const Dashboard=({match})=>{
    const dispatch= useDispatch();
   const {users,loading}=useSelector(state=>state.alluser)

//    const userId = match.params.id;

  useEffect(()=>{ 
//    dispatch(getdriverDetails(userId)) 
    dispatch(allUsers()) 
},[dispatch])
//  const handler = (e,id) => {
//    //  e.preventDefault()
//     dispatch(getdriverDetails(id)) 
   
//  }
//  setTimeout((e,id) => {
//     handler(e,id)
//   }, 2000);

const setdrivers = () => {
    const data = {
        columns: [
            {
                label: 'User ID',
                field: 'id',
                sort: 'asc'
            },
            {
                label: 'Name',
                field: 'drivername',
                sort: 'asc'
            },
            {
                label: 'phone',
                field: 'Phone_No',
                sort: 'asc'
            },
            {
                label: 'vehicle type',
                field: 'vehicletype',
            },
            {
                label: 'created By',
                field: 'createdby',
                sort: 'asc'
            },
            {
                label: 'created At',
                field: 'createdAt',
                sort: 'asc'
            },
            {
                label: 'Approved',
                field: 'status',
                sort: 'asc'
            },
            
            {
                label: 'Approved Driver',
                field: 'options',
            },
            {
                label: 'More Details',
                field: 'Details',
            },
            {
                label: 'Vehicle Details',
                field: 'Vehicle',
            },
        ],
        rows: []
    }
    users.forEach(user => {

        data.rows.push({

            id: user._id,
            drivername: user.firstname,
            Phone_No: user.Phone_No,
            
            vehicletype:user.VehicleType,
            createdby:"App",
            createdAt:user.createdAt,
            status:user.status,

            options: <Fragment>
              
                     {/* <button onClick={(e)=>handler(e,user._id) }
                   
                     > */}
                         <Link to={`/admin/driver/${user._id}`} className="btn btn-primary py-1 px-2"> 
     
                             
                        
                             <i className="fa fa-pencil"></i>
                          
                             </Link>
                         {/* </button> */}
                        
                
               
            </Fragment>,
            Details:<Fragment>
               {/* <button onClick={(e)=>handler(e,user._id)}> */}
                 <Link to={`/admin/driver/details/${user._id}`} className="btn btn-primary py-1 px-2">
                 <i className="fa fa-pencil"></i>
                    </Link>
                 {/* //   </button> */}
                   
            </Fragment>,
            Vehicle:
            <Fragment>
                {/* <button onClick={(e)=>handler(e,user._id)}> */}
                 <Link to={`/admin/driver/vehicledetails/${user._id}`} className="btn btn-primary py-1 px-2">
                       Details
                    </Link>
                    {/* </button> */}
            </Fragment>,
        })
    })

    return data;
}

return (
    <Fragment>
       
      

            <div className="col-12 col-md-10">
                <Fragment>
                    <h1 className="my-5">All Drivers</h1>

                    {loading ?<h2> data not available</h2> : (
                        <MDBDataTable
                            data={setdrivers()}
                            className="px-3"
                            bordered
                            striped
                            hover
                        />
                    )}

                </Fragment>
            </div>
      

    </Fragment>
)
}

export default Dashboard