import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeHandle = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    const getItem = JSON.parse(localStorage.getItem("user")) || [];
    let findMailData = getItem.find((e) => e.email === FormData.email);
    if (findMailData) {
      Swal.fire({
        title: "Registration Failed!",
        text: "Unable to create your account . please use valid email !",
        icon: "error",
        confirmButtonText: "ok",
      });
    } else {
      const localData = getItem.concat(FormData);
      localStorage.setItem("user", JSON.stringify(localData));
      Swal.fire({
        title: "Registration Successful!",
        text: "Welcome aboard!",
        icon: "success",
        confirmButtonText: "Great!",
      });
      navigate("/");
    }
  };

  return (
    <div>
      <center style={{ marginTop: "200px" }}>
        <form className="w-50 p-5 mt-5  rounded-4  shadow text-start">
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              onChange={changeHandle}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              onChange={changeHandle}
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              password{" "}
            </label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="email"
              onChange={changeHandle}
              aria-describedby="emailHelp"
            />
          </div>

          <button
            type="submit"
            class="w-100  btn btn-success"
            onClick={SubmitForm}
            style={{ backgroundColor: "#23629F" }}
          >
            Submit
          </button>
          <br />

          <Link to="/" className="mt-3" style={{ color: "#23629F" }}>
            Already have an Account
          </Link>
        </form>
      </center>
    </div>
  );
};

export default Signup;
