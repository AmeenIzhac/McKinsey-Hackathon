import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Header from "./navbar"
export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
    <>
<Header />
<main className="bg-gradient-to-b from-[#763E98] to-violet-400">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <Link to={'/Campaigns'}>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            </Link>
            <p className="text-center mt-2">
            <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
      </main>
      </>
    )
  }

  return (
    <>
<Header />

<main className="bg-gradient-to-b from-[#763E98] to-violet-400">
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
            
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="phone"
              className="form-control mt-1"
              placeholder="Phone Number"
            />
            
          </div>
          <div className="form-group mt-3">
            <label>On Behalf Of:</label>
            <input
              type="behalf_of"
              className="form-control mt-1"
              placeholder="On Behalf of..."
            />
            
          </div>
          <div className="form-group mt-3">
            <label>Referenced by:</label>
            <input
              type="reference"
              className="form-control mt-1"
              placeholder="Name of Reference"
            />
            
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="address"
              className="form-control mt-1"
              placeholder="Address"
            />
            
          </div>
          <div className="form-group mt-3">
            <label>Country</label>
            <input
              type="country"
              className="form-control mt-1"
              placeholder="Country"
            />
            
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Unique_id</label>
            <input
              type="unique_id"
              className="form-control mt-1"
              placeholder="Enter given Unique ID"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
          <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
    </main>
    </>

  )
}