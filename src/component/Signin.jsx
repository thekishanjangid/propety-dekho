import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = ({ setLoginEmail, loginEmail }) => {
  const [formData, setFormData] = useState({});
  const [getDataArray, setGetDataArray] = useState([]);

  const navigate = useNavigate();

  const changeHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    let findData = getDataArray.find(
      (e) => formData.email === e.email && formData.password === e.password
    );
    if (findData) {
      localStorage.setItem("LoggedInUser", JSON.stringify(formData));
      navigate("/Home");
      setLoginEmail(loginEmail + 1);
    } else {
      alert("Email is not valid! Use a valid email!");
    }
  };

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("user")) || [];
    setGetDataArray(getItem);
  }, []);

  return (
    <div>
      <center style={{ position : "relative" , top : "200px" }} >
        <form className="w-50 p-5  rounded-4  shadow text-start">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={changeHandle}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={changeHandle}
              className="form-control"
              id="password"
              aria-describedby="emailHelp"
            />
          </div>

          <button
            type="submit"
            className="w-100 btn btn-success"
            onClick={submitHandle}
            style={{ backgroundColor: "rgb(94, 63, 224)" }}
          >
            Submit
          </button>
          <br />
          <br />
          <Link to="/Signup" className="mt-3" style={{ color: "rgb(94, 63, 224)" }}>
            Create an Account
          </Link>
        </form>
      </center>
    </div>
  );
};

export default Signin;
