import { invoiceItems } from "../lib/lib";

const Dasboard = () => {
    return ( 
        <>
            
        <section className="container-xl position-static mb-10">
            <div className="row h-auto p-0 position-sticky sticky-top mt-2 py-3 bg-white">
                <div className="col mb-md-0 align-self-start justify-content-start">
                    <h1 className="h3 font-bolder mb-0">Dashboard</h1>
                </div>
               
                <div className="col-auto text-md-end">
                    <div className="mx-n1">
                        <div className="dropdown">
                            <button className="btn btn-sm btn-secondary dropdown-toggle mx-4" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Quolaity&nbsp;&nbsp;
                            </button>
                            <ul className="dropdown-menu mt-2 border-dark" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">New Invoice</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Log Out</a></li>
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

        <div className="header position-sticky sticky-top py-2 bg-white">
            <div className="row mt-5 h-auto p-0">
                <div className="col mb-3 mb-md-0 align-self-start justify-content-start">
                    <h1 className="h3 font-bolder mb-0">Invoices</h1>
                    <p className="text-xs">List of recent Transactions</p>
                </div>
               
                <div className="col-auto text-md-end">
                    <div className="mx-n1">
                            <button className="btn btn-sm btn-primary">Create New</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="text-dark font-bolder">Name</th>
                            <th scope="col" className="text-dark font-bolder">Price</th>
                            <th scope="col" className="text-dark font-bolder">Date</th>
                            <th scope="col" className="text-dark font-bolder">Units</th>
                            <th scope="col" className="text-dark font-bolder">Total</th>
                            <th scope="col" className="text-dark font-bolder">Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {invoiceItems.map((invoice) => (
                            <tr key="">
                            <td data-label="invoice_title">
                                <span className="text-heading font-bold">
                                    {invoice.Name}
                                </span>
                            </td>
                            <td data-label="Price">
                                <span>{invoice.Price}</span>
                            </td>
                            <td data-label="Date">
                                <span className="text-current">{invoice.Date.toLocaleDateString()}</span>
                            </td>
                            <td data-label="units_sold">
                                <span className="text-current">{invoice.Units}</span>
                            </td>
                            <td data-label="total">
                                <span className="badge-md rounded bg-soft-success text-success">₹{invoice.Total}</span>
                            </td>
                            <td data-label="status">
                                {invoice.Paid ? <a className="text-current"></a> : null}
                            </td>
                            <td data-label="" className="text-end">
                                <div className="dropdown">
                                    <a className="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#!" className="dropdown-item">
                                            Action
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            Another action
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            Something else here
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </section>

        </>
     );
}
 
export default Dasboard;