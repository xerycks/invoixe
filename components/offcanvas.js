import { useState, useEffect } from "react";

export default function Offcanvas() {
    
    return (


    <>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel" className="h5"><i className="bi bi-file-text"></i>&nbsp;&nbsp;Create new invoice</h5>
                <i className="btn bi bi-x-lg" data-bs-dismiss="offcanvas" aria-label="Close" typeof="button"></i>
            </div>
            <div className="offcanvas-body">
            
        {/* Form --
        
            -- Name
            -- Price
            -- Date
            -- Units
            -- Total
            -- Status
        
         */}

                <div className="mb-5 input-group-md text-xs">
                    <input type="name" className="form-control mb-4" placeholder="Item Name" />
                    <input type="number" className="form-control mb-4" placeholder="Price" />
                    <input type="date" defaultValue={new Date()} className="form-control mb-4" placeholder="Date" />
                    <input type="number" className="form-control mb-4" placeholder="Units" />
                    <input type="number" className="form-control mb-4" placeholder="Total" />
                    <input className="form-check-input" type="checkbox" name="check_example" id="check_example" />
                    <label className="form-check-label ms-2 mt-n1" htmlFor="check_example">
                        Already Paid ?
                    </label>
                </div>

                <button className="btn btn-md btn-primary w-100">Create Invoice</button>
              
            </div>
        </div>
    </>
    
    )
}