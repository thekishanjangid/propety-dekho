// ProductDetails.jsx

import React, { useEffect, useState } from "react";
import "./productDetailslint.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Add this line

import Swal from "sweetalert2";

const ProductDetails = () => {
  const [logEmail, setLogEmail] = useState();
  const [cartData, setCartData] = useState([]);
  const location = useLocation();
  const history = useNavigate(); // Use the hook in your component

  const state = location.state;
  const {
    image,
    image1,
    image2,
    image3,
    category,
    brand,
    title,
    description,
    price,
    discount,
    rating,
    id,
  } = state;

  const [defaultImage, setDefaultImage] = useState(image);

  const clickImage = () => {
    setDefaultImage(image);
  };

  const clickImage1 = () => {
    setDefaultImage(image1);
  };

  const clickImage2 = () => {
    setDefaultImage(image2);
  };

  const clickImage3 = () => {
    setDefaultImage(image3);
  };

  const off = () => {
    let calculate = (price * discount) / 100;
    let total = Math.trunc(price - calculate);
    return total;
  };

  const addCart = () => {
    const productData = {
      productId: Math.random() * 10000,
      image,
      id,
      brand,
      title,
      price: off(),
      discount,
      quantity: 1,
    };

    let findIndexData = cartData.find((e) => e.id === id);

    if (!!logEmail) {
      if (findIndexData) {
        Swal.fire({
          title: "Product is Already Added",
          text: "Your Product is already has been added.",
          icon: "warning",
        });
      } else {
        let localData = cartData.concat(productData);
        setCartData(localData);
        localStorage.setItem("cartData", JSON.stringify(localData));
        Swal.fire({
          title: "Product Added to Cart",
          text: "Your product has been added to the cart successfully.",
          icon: "success",
        });
      }
    } else {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to access this feature.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/login");
        }
      });
    }
  };

  useEffect(() => {
    let getLogData = JSON.parse(localStorage.getItem("LoggedInUser")) || [];
    let getCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(getCartData);
    setLogEmail(getLogData.email);
  }, []);

  return (
    <div>
      <div className="container-main">
        <div className="container-main-div ">
          <div
            className="single-product "
            style={{ }}
          >
            <div className="row-div ">
              <div className="col-6-div">
                <div className="product-image">
                  <div className="product-image-main">
                    <img src={defaultImage} alt="" id="product-main-image" />
                  </div>
                  <div className="product-image-slider">
                    <img
                      src={image}
                      onClick={clickImage}
                      alt=""
                      className="image-list"
                    />
                    <img
                      src={image1}
                      onClick={clickImage1}
                      alt=""
                      className="image-list"
                    />
                    <img
                      src={image2}
                      onClick={clickImage2}
                      alt=""
                      className="image-list"
                    />
                    <img
                      src={image3}
                      onClick={clickImage3}
                      alt=""
                      className="image-list"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6-div">
                <table
                  id="FactTableComponent"
                  className="component__factTable generic__listNone"
                >
                  <tbody>
                    <tr>
                      <td style={{ height: "135px" }}>
                        <div className="component__tableHead">
                          <i className="pd__iconPd component__areaIcon"></i>Area
                        </div>
                        <div
                          className="component__details component__details2"
                          id="factArea"
                        >
                          Plot area <span id="superArea_span">1060</span>
                          <br />
                          <span style={{ fontSize: "10px", color: "#999" }}>
                            (98.48 sq.m.)
                          </span>
                          <br />
                          Built Up area: <span id="builtupArea_span">
                            1600
                          </span>{" "}
                          <span id="builtupAreaLabel">sq.ft.</span>{" "}
                          <span
                            style={{ fontSize: "10px", color: "#999" }}
                            id="displayBuiltupArea_span"
                          >
                            (148.64 sq.m.)
                          </span>
                          <br />
                          Carpet area: <span id="carpetArea_span">
                            1450
                          </span>{" "}
                          <span id="builtupAreaLabel">sq.ft.</span>{" "}
                          <span
                            style={{ fontSize: "10px", color: "#999" }}
                            id="displayBuiltupArea_span"
                          >
                            (134.71 sq.m.)
                          </span>
                          &nbsp;&nbsp;
                          <a
                            className="component__unitDropdown component__unit [object Object]"
                            style={{ left: "101px" }}
                          >
                            <span>sq.ft.</span>
                            <i className="component__blueArrow pd__iconPd"></i>
                          </a>
                        </div>
                      </td>
                      <td style={{ height: "135px" }}>
                        <div className="component__tableHead">
                          <i className="pd__iconPd component__configIcon"></i>
                          Configuration
                        </div>
                        <div className="component__details " id="">
                          <span id="bedRoomNum">3 Bedrooms </span>,{" "}
                          <span id="bathroomNum">3 Bathrooms</span>,{" "}
                          <b>
                            <span id="balconyNum">1 Balcony </span>
                          </b>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: "96px" }}>
                        <div className="component__tableHead">
                          <i className="pd__iconPd component__priceIcon"></i>
                          Price
                        </div>
                        <div className="component__details " id="">
                          ₹ <span id="pdPrice2">45 Lac</span>
                          <span>+ Govt Charges &amp; Tax</span> <br />@ 3,103
                          per sq.ft. <small>(Negotiable)</small>
                        </div>
                      </td>
                      <td style={{ height: "96px" }}>
                        <div className="component__tableHead">
                          <i className="pd__iconPd component__addressIcon"></i>
                          Address
                        </div>
                        <div className="component__details " id="">
                          Kalwar Road, Jaipur
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: "77px" }}>
                        <div className="component__tableHead">
                          <i className="pd__iconPd component__floorIcon"></i>
                          Total Floors
                        </div>
                        <div className="component__details " id="">
                          <span id="floorNumLabel">2 Floors</span>
                        </div>
                      </td>
                      <td style={{ height: "77px" }}>
                        <div className="component__tableHead">
                          <i className="pd__iconPd component__directionIcon"></i>
                          Facing
                        </div>
                        <div className="component__details " id="">
                          <span id="facingLabel">West</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: "77px" }}>
                        <div className="component__tableHead">
                          <i className="pd__iconPd component__overlookingIcon"></i>
                          Overlooking
                        </div>
                        <div
                          className="component__overlookingStyle component__details "
                          id=""
                        >
                          <span id="overlooking">Main Road,Others</span>
                        </div>
                      </td>
                      <td style={{ height: "77px" }}>
                        <div className="component__tableHead">
                          <i className="pd__iconPd component__possessionIcon"></i>
                          Property Age
                        </div>
                        <div className="component__details " id="">
                          <span id="agePossessionLbl">0 to 1 Year Old</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
