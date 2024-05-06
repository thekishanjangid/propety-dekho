import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Navbar from "./component/Navbar";
import Home from "./Home";
import "./App.css";
import Properties from "./component/Properties";
import ProductDetails from "./component/ProductDetails";
import Owner from "./component/owner";


const App = () => {
  const [loggedData, setLoggedData] = useState();
  const [loginEmail, setLoginEmail] = useState(0);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState();

  const location = useLocation();

  useEffect(() => {
    let loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    setLoggedData(loggedInUser);
  }, [count, loginEmail]);

  return (
    <div>
      <Navbar
        category={category}
        setCategory={setCategory}
        setCount={setCount}
        count={count}
      />

      <Routes>
        <Route path="/" element={<Signin setLoginEmail={setLoginEmail} loginEmail={loginEmail} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/owner" element={<Owner />} />

      </Routes>
    </div>
  );
};

export default App;
