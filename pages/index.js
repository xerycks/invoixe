/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
export default function Home() {
  return (
   <>

    <section className="home container-fluid p-0">
        <div className="row home-inner m-0">
        <div className="col-lg-5 bg-primary pb-16 pb-sm-10">
        <h1 className="font-bolder display-6 p-md-10 px-10 mt-5 mt-lg-auto text-center text-white mb-3"><i className="bi bi-file-text"></i>&nbsp;&nbsp;Invoixe</h1>
            <div className="content align-content-center justify-content-center mt-lg-14">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner w-75 mx-auto">
                    <div className="carousel-item active" data-bs-interval="2500">
                    <img src="/Data-report.svg" className="d-block mx-auto" alt="..." />
                    <h3 className="mx-auto w-90 text-center font-bolder text-white">Save your time making & delivering Receipts.</h3>
                    <p className="text-xs text-white text-center mt-5">Time is Wealth !</p>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                    <img src="/Receipt.svg" className="d-block mx-auto" alt="..." />
                    <h3 className="mx-auto w-90 text-center font-bolder text-white">Give a much more detail in customers bill !</h3>
                    <p className="text-xs text-white text-center mt-5"> For better transparency !</p>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                    <img src="Work-in-progress.svg" className="d-block mx-auto" alt="..." />
                    <h3 className="mx-auto w-90 text-center font-bolder text-white">All your data saved securely on cloud.</h3>
                    <p className="text-xs text-white text-center mt-5">Access from anywhere, anytime !</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="col-lg-7 d-flex justify-content-around">
            <div className="p-10 login-box m-lg-20 w-full">
            <brand className="">
            <i className="bi bi-file-text"></i>&nbsp;&nbsp;Invoices with the <span className="font-bolder text-tertiary">X-factor !</span>
            </brand>    
            <h2 className="mt-6">Get Into Your Invoices</h2>
            <form className="login-form mt-6 w-100">
                <div className="mb-5 input-group-md text-xs">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Your email address" />
                </div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="mb-5">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="check_example" id="check_example" />
                        <label className="form-check-label" htmlFor="check_example">
                            Keep me logged in
                        </label>
                    </div>
                </div>
                <div>
                    <a href="/dashboard" className="btn btn-primary w-full w-md-50 mx-1">Login</a>
                </div>
            </form>

            <hr className="w-70 mx-auto  mt-10"/>

            <a href="/signup" className="text-dark"><p className="text-sm float-end">Don&apos;t have a account ? <span className="text-primary">Register here !</span></p></a>

            </div>
        </div>
        </div>
    </section>

   </>
  )
}
