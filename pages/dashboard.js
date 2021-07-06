/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";

const Dasboard = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [units, setUnits] = useState('')
    const [date, setDate] = useState('')
    const [total, setTotal] = useState('')
    
    const handleFormSubmit = (e) => {
        if(process.browser){
        
        document.getElementById('offcanvasRight').classList.remove('show')
        document.body.removeAttribute('style')
    }
    
    const invoiceID = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(7, 10)
    
    const garbageKey = "ally-supports-cache"
    if (localStorage.getItem(garbageKey) !== null){
        localStorage.removeItem(garbageKey)
    }
    
    if(name !== "" && price !== "" && units !== "" && date !== "" && total !== ""){
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

function nayafunction() {
    
    localStorage.removeItem("ally-supports-cache")
    
    const values=[]
    const keys = Object.keys(localStorage)    
    keys.forEach((key) => {
        values.push(JSON.parse(localStorage.getItem(key)))
    })
    console.log(values)
    return values
}

const deleteInvoice = (e) => {
    if(process.browser){
        console.log(e.target.id);
        localStorage.removeItem(e.target.id)
        window.location.reload();
    }
}

    return ( 
        <>
            
        <section className="container-xl position-static mb-10">
            <div className="row h-auto p-0 position-sticky sticky-top mt-2 py-3 bg-white">
                <div className="col mb-md-0 align-self-start justify-content-start">
                    <h1 className="h2 font-bolder mb-0">Dashboard</h1>
                </div>
               
                <div className="col-auto text-md-end">
                    <div className="mx-n1">
                        <div className="dropdown">
                            <button className="btn btn-sm btn-secondary dropdown-toggle mx-4" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Quoality&nbsp;&nbsp;
                            </button>
                            <ul className="dropdown-menu border-dark" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">New Invoice</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="/">Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-10 h-auto">
                
                <div className="col-lg-4 my-2 my-lg-auto">
                <div className="card payment_card">
                    <div className="card-body">
                        <p className="text-sm mb-2">
                            RECEIVED TILL NOW
                        </p>
                        <h3 className="h1 font-bolder mb-4">₹ 50,310.00 /-</h3>
                        <a href="#" className="btn btn-sm btn-primary py-1 px-4">
                            +10% since last month
                        </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 my-2 my-lg-auto">
                <div className="card payment_card bg-primary">
                    <div className="card-body">
                        <p className="text-sm mb-2 text-white">
                            TOTAL GROSS
                        </p>
                        <h3 className="h1 font-bolder mb-4 text-white">₹ 69,420.00 /-</h3>
                        <a href="#" className="btn btn-sm btn-white py-1 px-4">
                            Noice, LOL !
                        </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 my-2 my-lg-auto">
                <div className="card payment_card border-warning bg-danger">
                    <div className="card-body">
                        <p className="text-sm mb-2 text-white">
                            PENDING PAYMENTS
                        </p>
                        <h3 className="h1 font-bolder mb-4 text-white">₹ 19,110.00 /-</h3>
                        <a href="#" className="btn btn-sm btn-white py-1 px-4">
                            Send Reminders
                        </a>
                    </div>
                </div>
                </div>

            </div>

        </section>

        <section className="container-xl position-relative">

        <div className="position-sticky sticky-top py-2 bg-white">
            <div className="row mt-5 h-auto p-0 w-full">
                <div className="col mb-3 mb-md-0 align-self-start justify-content-start">
                    <h1 className="h2 font-bolder mb-0">Invoices</h1>
                    <p className="text-xs">List of recent Transactions</p>
                </div>
               
                <div className="col-auto text-md-end">
                    <div className="mx-n1">
                        <button className="btn btn-sm btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-plus"></i>&nbsp;&nbsp;Create New</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="row my-10">
            <div className="table-responsive">
                {process.browser && nayafunction().length !== 0 ?
                <table className="table table-hover table-nowrap">
                    <thead className="thead-light">
                        <tr>

                            <th scope="col" className="text-dark font-bolder">Invoixe ID</th>
                            <th scope="col" className="text-dark font-bolder">Name</th>
                            <th scope="col" className="text-dark font-bolder">Price</th>
                            <th scope="col" className="text-dark font-bolder">Date</th>
                            <th scope="col" className="text-dark font-bolder">Units</th>
                            <th scope="col" className="text-dark font-bolder">Total</th>
                            <th scope="col" className="text-dark font-bolder">Status</th>
                            <th></th>
                        </tr>
                    </thead>
                        <tbody id="invoice_body">
                        {nayafunction().map((invoice) => (
                            <tr key={invoice.id}>
                            <td data-label="invoice_title">
                                <span className="text-heading font-bold">
                                    {invoice.id}
                                </span>
                            </td>
                            <td data-label="invoice_title">
                                <span className="text-heading font-bold">
                                    {invoice.Name}
                                </span>
                            </td>
                            <td data-label="Price">
                                <span>{invoice.Price}</span>
                            </td>
                            <td data-label="Date">
                                <span className="text-current">{invoice.Date}</span>
                            </td>
                            <td data-label="units_sold">
                                <span className="text-current">{invoice.Units}</span>
                            </td>
                            <td data-label="total">
                                <span className="badge-md rounded bg-soft-success text-success">₹{invoice.Total}</span>
                            </td>
                            <td data-label="status">
                                {invoice.Paid ? <a className="text-current">Paid</a> : null}
                            </td>
                            <td data-label="" className="text-end">
                                <span><a className="btn btn-sm" id={invoice.id} onClick={(e) => {deleteInvoice(e)}}><i className="bi bi-trash" id={invoice.id}></i></a></span>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
                : <div className="w-full d-flex justify-content-around"><p className="lead text-center py-5 mx-auto w-auto btn btn-lg btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Click Here Create Your First Invoice</p></div>}
            </div>
        </div>


        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel" className="h5"><i className="bi bi-file-text"></i>&nbsp;&nbsp;Create new invoice</h5>
                <i className="btn bi bi-x-lg" data-bs-dismiss="offcanvas" aria-label="Close" typeof="button"></i>
            </div>
            <div className="offcanvas-body">

                <div className="mb-5 input-group-md text-xs">
                <form onSubmit={(e) => {handleFormSubmit(e)}}>
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
        
        </section>

        </>
     );
}
 
export default Dasboard;