import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Register } from './user/users';
import { Login } from './user/login';

import Log from './user/logout';
import './App.css';

import Header from './header';
import { loaduser } from './actions/authactions';
import { useEffect } from 'react';
import store from './store'
import Details from './user/Details';
import Vehicle from './user/Vehicledetails';
import ProtectedRoute from './user/route.js'
import Profile from './user/profile';
import Dashboard from './user/dashboard';
import UpdateUser from './user/updatestatus';
import VerifyDocuments from "./user/VerifyDocuments"
import TrackDriver from './user/TrackDriver';
import WalletLogs from './user/WalletLogs'
function App() {

  useEffect(()=>{
    store.dispatch(loaduser())
  },[])   
 
  return (
   <Router> 
   
     <Route path="/register">
     <Header/>
     <Register/> 
     </Route>
     <Route path="/login"  component={Login} exact /> 
      <Route path="/logout" component={Log} exact/>


<ProtectedRoute path="/profile" component={Profile} exact/>
<ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact/>
<Route path="/admin/driver/:id"  component={UpdateUser} exact/>
<Route path="/admin/driver/details/:id"  component={Details} exact/>
<Route path="/admin/driver/vehicledetails/:id"  component={Vehicle} exact/>
<Route path="/verifyDocuments" component={VerifyDocuments} exact></Route>
<Route path="/trackDriver" component={TrackDriver} exact></Route>
<Route path="/walletLogs" component={WalletLogs} exact></Route>


   </Router>
  );
}

export default App;
