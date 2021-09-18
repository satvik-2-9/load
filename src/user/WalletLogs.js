import React from 'react'
import './styles/WalletLogs.css'
function WalletLogs() {
    return (
        <div className="logs">
            <div className="head"> Welcome admin Dashboard !</div>
            <div className="bottom">
                  
            <div class="row quick-action-toolbar">
              <div class="col-md-12 grid-margin">
                <div class="card">
                  <div class="card-header d-block d-md-flex">
                    <h5 class="mb-0">Quick Actions</h5>
                    <p class="ml-auto mb-0">How are your active users trending overtime?<i class="icon-bulb"></i></p>
                  </div>
                  <div class="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
                    <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" class="btn px-0">
                           <i class="fa fa-user mr-2"></i> Total Earnings </button>
                    </div>
                    <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" class="btn px-0">
                          <i class="fa fa-briefcase"></i>Total Drivers </button>
                    </div>
                    <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" class="btn px-0"><i class="fa fa-folder mr-2"></i> Total Trips </button>
                    </div>
                    <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" class="btn px-0"><i class="fa fa-anchor menu-icon"></i>Total Users </button>
                    </div>
                    
                      <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" class="btn px-0"><i class="fa fa-tripadvisor"></i>Upcoming TripList </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
        </div>
    )
}

export default WalletLogs
 