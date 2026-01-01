import { useState } from "react";

const LoginPage = () => {
    const [message, setMessage] = useState("")
    var formdata = {}

    const handleChange = (event) => {
        if (event.target.name == "username")
            formdata.username = event.target.value
        if (event.target.name == "password")
            formdata.password = event.target.value
    }



    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("https://dummyjson.com/auth/login", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            
            body:JSON.stringify(formdata)
        })
            .then(res => res.json())
            .then(res => {
                if (res.message) {
                    setMessage(res.message)
                } else {
                    setMessage("")
                }

            })
    }
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-6 offset-3 my-auto d-flex" style={{ height: "100vh" }}>
                    <form action="" method="post" onSubmit={handleSubmit} className=" d-block bg-white shadow mx-auto my-auto" style={{ height: "60vh", width: "50vh" }}>
                        <h3 className="text-muted text-center my-3">Login Here</h3>
                        {message != "" && <p className="alert alert-danger">{message}</p>}
                        <input className="form-control my-3" type="text" name="username" placeholder="username" required onChange={handleChange} />
                        <input className="form-control my-3" type="password" name="password" placeholder="password" required onChange={handleChange}/>
                        <input className="btn btn-dark w-100 my-3" type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
}

export default LoginPage;