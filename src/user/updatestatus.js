import React, { Fragment, useState, useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { updateUser ,getdriverDetails} from '../actions/authactions'


const UpdateUser = ({ history, match }) => {

   // const {users,loading}=useSelector(state=>state.alluser)
    const {user}=useSelector(state=>state.driverdetails)
    const {isUpdated}=useSelector(state=>state.user)



    const [status, setstatus] = useState("Processing")

    const dispatch = useDispatch();

    

    const userId = match.params.id;

    useEffect(() => {

        console.log(user && user._id !== userId);
        if (user && user._id !== userId) {
            dispatch(getdriverDetails(userId))
        } else {
          
            setstatus(user.status)
        }
           
      if(isUpdated){
             history.push('/dashboard')
      }

           
         
        

    }, [dispatch,userId,isUpdated,history,user])
    
  
    const updateOrderHandler = (e,id) => {
      e.preventDefault();

        const formData = new FormData();
      
        formData.set('status', status);

        dispatch(updateUser(id, status))
    }


    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                </div>

                <div className="col-12 col-md-10">
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg" >
                                <h1 className="mt-2 mb-5">Update Driver</h1>


                               

                                <div className="form-group">
                                    <label htmlFor="role_field">status</label>

                                    <select
                                        id="role_field"
                                        className="form-control"
                                        name='status'
                                        value={status}
                                        onChange={(e) => setstatus(e.target.value)}
                                    >
                                        <option value="Processing">Processing</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Reject">Reject</option>
                                    </select>
                                </div>

                                <button className="btn btn-primary btn-block" onClick={(e)=>updateOrderHandler(e,user._id)}>
                                Update Status
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default UpdateUser