import React, { Component } from 'react';
import axios from "axios";
import './Login.scss';
import { toast } from 'react-toastify';

class Login extends Component {
    state = {
        token: "",
        // email: "eve.holt@reqres.in",
        // password: "cityslicka",
        email: "",
        password: ""
    }
    async handleOnclickSignIn(event) {
        try {
            let res = await axios.post('https://reqres.in/api/login', { email: this.state.email, password: this.state.password });
            console.log("res:", res);
            if (res && res.data.token) {
                this.setState({
                    token: res.data.token
                })
                this.props.setToken(this.state.token);
            }
        } catch (e) {
            toast.error("Invalid email or password!");
            return
        }
        // await fetch('https://reqres.in/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email: this.state.email, password: this.state.password })
        // }).then(data => { console.log(data.json()) })
    }



    // console.log("res:", res.data.token)

    // res.data.data = [...res.data.data, temp]
    // let startIndex = (this.state.page - 1) * this.state.userPerPage
    // this.setState({
    //     listUsers: res && res.data.data ? res.data.data : [],
    //     searchedUsers: res && res.data.data ? res.data.data : [],
    //     userListForDisplay: res.data.data.slice(startIndex, startIndex + this.state.userPerPage)
    // })
    // }

    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function(response) {
    //     console.log(response);
    // })
    //   .catch(function(error) {
    //     console.log(error);
    // });
    render() {
        console.log(this.state)
        return (
            <div className="Auth-form-container">
                <div className='Auth-form'>
                    {/* <form className="Auth-form"> */}
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" onClick={(event) => this.handleOnclickSignIn(event)}>
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>
                {/* </form> */}
            </div>
        );
    }
}

export default Login;