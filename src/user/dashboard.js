import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allUsers } from '../actions/authactions'
import { MDBDataTable } from 'mdbreact'
import { DropdownButton, Dropdown,Button } from 'react-bootstrap'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import './styles/dashboard.css'
import pc from './pc.png'
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
                label: 'Status',
                field: 'Status',
                sort:'asc'
            },
            {
                label: 'Balance',
                field: 'Balance',
                sort:'asc'
            },
            {
                label: 'Online',
                field: 'Online',
                sort:'asc'
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
                label: 'pic',
                field: 'pic',
                sort:'asc'
            },
            {
                label: 'vehicle type',
                field: 'vehicletype',
            },
            {
                label: 'Reffered By',
                field: 'RefferedBy',
                sort:'asc'
            },
            {
                label: 'Action',
                field: 'Action',
                sort:'asc'
            },
            {
                label: 'Orders',
                field: 'Ordeers',
                sort:'asc'
            },
            {
                label: 'Reviews',
                field: 'Reviews',
                sort:'asc'
            },
            {
                label: 'created By',
                field: 'createdBy',
                sort: 'asc'
            },
            {
                label: 'Registered on',
                field: 'RegisteredOn',
                sort: 'asc'
            }
        ],
        rows: []
    }
    users.forEach(user => {

        data.rows.push({

            id: user._id,
            /* status: user.status,
            Balance: user.balance,
            online: user.online, */
            drivername: user.firstname,
            Phone_No: user.Phone_No,
            pic:<img src="https://partners.olacabs.com/public/img/type2.98e5661.png" className="img"></img>,
            vehicletype:user.VehicleType,
            createdby:"App",
            createdAt:user.createdAt,
            Action:
            <DropdownButton className="but" id="dropdown-button-dark-example1" variant="secondary" title="Actions">
             <Dropdown.Item href="#/action-1">Add & verify documents</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Track Driver</Dropdown.Item>
             <Dropdown.Item href="#/action-3">View wallet logs</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Update profile</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Detail Profile</Dropdown.Item>
            </DropdownButton>,
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
                    <div> 
            <div className="constraints">
               <div className="tp"><span className="title">Status:</span>
                 <DropdownButton className="but" id="dropdown-button-dark-example1"  variant="secondary" title="All">
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Acitve</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Blocked</Dropdown.Item>
                </DropdownButton>
                </div>
                <div className="tp"><span className="title">Approved:</span> <DropdownButton className="but" id="dropdown-button-dark-example1"  variant="secondary" title="All">
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Approved</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Pending</Dropdown.Item>
                </DropdownButton>
                </div>
                <div className="tp"><span className="title">online:</span> <DropdownButton className="but" id="dropdown-button-dark-example1"  variant="secondary" title="online">
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">online</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">offline</Dropdown.Item>
                </DropdownButton>
                </div>
                <div className="tp"><span className="title">From Date:</span> 
                  <DatePickerComponent placeholder="Select Date"></DatePickerComponent>
                </div>
                <div className="tp"><span className="title">To Date:</span> 
                  <DatePickerComponent placeholder="Select Date"></DatePickerComponent>
                </div>
                
              
            </div>
                <div className="row2">
                          
                <Button variant="secondary" className="butt">Filter</Button>
                <Button variant="secondary" className="butt">Export to Excel </Button>
                <input type="text" placeholder="Search"></input>
               </div>
                
            </div>
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