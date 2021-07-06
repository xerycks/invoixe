import { useEffect } from "react";
import Offcanvas from "./offcanvas";

const invoices = () => {

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

    return ( 

        <div className="row my-10">
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
                    <tbody id="invoice_body">
                        {process.browser && nayafunction().map((invoice) => (
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
                                <div className="dropdown">
                                    <a className="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#!" className="dropdown-item">
                                            Delete
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            Edit
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
     );
}
 
export default invoices;
