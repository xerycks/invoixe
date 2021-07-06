import { useState, useEffect } from "react";

export default function Offcanvas() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [units, setUnits] = useState('')
    const [date, setDate] = useState('')
    const [total, setTotal] = useState('')
    
    const handleFormSubmit = (e) => {
    
    const invoiceID = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(7, 10)
    
    const garbageKey = "ally-supports-cache"
    if (localStorage.getItem(garbageKey) !== null){
        localStorage.removeItem(garbageKey)
    }

    if(1 === 1){
        localStorage.setItem(  invoiceID , JSON.stringify({
            id: `${invoiceID}`,
            Name: `${name}`,
            Description: 'Something',
            Price: `${price}`,
            Date: `${date}`,
            Units: `${units}`,
            Discounts: '69',
            Total: `${total}`,
            Tax: '18%',
            Paid: true
        }
        )
    );
    }
};
    
return (


    <>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel" className="h5"><i className="bi bi-file-text"></i>&nbsp;&nbsp;Create new invoice</h5>
                <i className="btn bi bi-x-lg" data-bs-dismiss="offcanvas" aria-label="Close" typeof="button"></i>
            </div>
            <div className="offcanvas-body">

                <div className="mb-5 input-group-md text-xs">
                <form method="POST" onSubmit={(e) => {handleFormSubmit(e)}}>
                    <div>
                        <input type="name" required className="form-control mb-4" placeholder="Item Name" onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div>
                    <input type="number" required className="form-control mb-4" placeholder="Price" onChange={(e) => {setPrice(e.target.value)}}/>
                    </div>
                    <div>
                    <input type="date" required className="form-control mb-4" placeholder="Date" onChange={(e) => {setDate(e.target.value)}}/>
                    </div>
                    <div>
                    <input type="number" required className="form-control mb-4" placeholder="Units" onChange={(e) => {setUnits(e.target.value)}}/>
                    </div>
                    <div>
                    <input type="number" required className="form-control mb-4" placeholder="Total" onChange={(e) => {setTotal(e.target.value)}}/>
                    </div>

                <button className="btn btn-sm btn-primary" >Create New Invoice</button>
              </form>
                </div>
            </div>
        </div>
    </>
    
    )
}