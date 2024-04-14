import React, { useState, useRef, useEffect } from "react";

import { Data, Data1 } from "./component/Data";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCheck,
  faCrosshairs,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSearchSubmit = () => {
    const filtered = Data.filter((item) =>
      item.address.toLowerCase().includes(address.toLowerCase())
    );
    setFilteredData(filtered);
    setSearched(true);
  };

  const clickProduct = (
    id,
    image,
    image1,
    image2,
    image3,
    type,
    price,
    size,
    address,
    description,
    rating
  ) => {
    return (
      <>
        {navigate("/productDetails", {
          state: {
            id,
            image,
            image1,
            image2,
            image3,
            type,
            price,
            size,
            address,
            description,
            rating,
          },
        })}
      </>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };

  let tabBarWidth = 0;
  let tabBarLeft = 0;

  if (activeTab !== null) {
    const activeTabElement = document.getElementById(
      `inPageSearchForm_${activeTab}`
    );

    if (activeTabElement) {
      tabBarWidth = activeTabElement.offsetWidth;
      tabBarLeft = activeTabElement.offsetLeft;
    }
  }
  return (
    <>
      <div class="shell">
        <section id="aa-client-testimonial">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="aa-client-testimonial-area">
                  <div
                    id="hp-search-form"
                    topmost="true"
                    style={{ top: "110px" }}
                    className="pageComponent inPageSearchBox__inPageSearchBox"
                    data-label="IN_PAGE_SEARCH"
                  >
                    <div id="inPageSearchForm" className="InPageTabs">
                      <div className="tab__tabs">
                        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                          <div
                            key={`tab_${index}`}
                            id={`inPageSearchForm_${index}`}
                            className={`tabChild list_header_semiBold pageComponent Ng500 ${
                              activeTab === index ? "active" : ""
                            }`}
                            data-label={
                              index === 0
                                ? "BUY"
                                : index === 1
                                ? "RENT"
                                : index === 2
                                ? "NL"
                                : index === 3
                                ? "PG"
                                : index === 4
                                ? "COMM"
                                : index === 5
                                ? "PLOTS"
                                : "PROJ"
                            }
                            onClick={() => handleTabClick(index)}
                          >
                            {index === 0
                              ? "Buy"
                              : index === 1
                              ? "Rent"
                              : index === 2
                              ? "New Launch"
                              : index === 3
                              ? "PG / Co-living"
                              : index === 4
                              ? "Commercial"
                              : index === 5
                              ? "Plots/Land"
                              : "Projects"}
                            {index === 2 && <div className="tab__redDot"></div>}
                          </div>
                        ))}
                        {activeTab !== null && (
                          <div
                            className="tab__bar"
                            style={{
                              width: `${tabBarWidth}px`,
                              left: `${tabBarLeft}px`,
                            }}
                          ></div>
                        )}
                      </div>
                      <div className="tab__tabsContent">
                        <div className="">
                          <div className="inPageSearchBox__searchTabWrap">
                            <div className="inPageSearchBox__inputFilterOptions">
                              <div className="inPageSearchBox__basicFilter">
                                <div className="inPageSearchBox__searchField">
                                  <div
                                    id="d_landmark_inPageSearchBox"
                                    className="pageComponent inPageSearchBox__searchFieldInput"
                                    data-label="SEARCH_INPUT"
                                    data-custominfo="{}"
                                  >
                                    <i className="iconS_Common_20 icon_search"></i>
                                    <div className="component__DeskSfInput">
                                      <input
                                        type="text"
                                        name="keyword"
                                        class="component__searchInput"
                                        id="keyword2"
                                        value={address}
                                        onChange={handleInputChange}
                                        placeholder="Enter your address..."
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="inPageSearchBox__searchBtn">
                                <button
                                  type="button"
                                  onClick={handleSearchSubmit}
                                  data-label="SEARCH_SUBMIT"
                                  data-custominfo='{"custom_object":{"availableFor":[],"sharing":[],"city":"","bedroom_num":[],"class":[],"locality":[],"brandIds":[],"keyword":"","preference":"S","area_unit":"1","availability":[],"res_com":"R","property_type":"","E_TYPE":"","name":""},"payload":{"basic_info":{"rescom":"R","preference":"S"}}}'
                                  className="pageComponent buttons__primaryRegular     undefined "
                                  data-sstheme="_BUTTON_TOP_LEVEL"
                                >
                                  <span
                                    className=" "
                                    data-sstheme="_BUTTON_SPAN"
                                  >
                                    Search
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="inPageSearchBox__searchFilters undefined "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inPageSearchBox__overlay"></div>
                  </div>

                  {/* <!-- testimonial content --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {searched && filteredData.length > 0 && (
          <div
            className="container"
            style={{
              display: "inline",
            }}
          >
            <div
              className="container-xxl custom-container"
              style={{
                "max-width": "1330px",
              }}
            >
              <div class="top-0 sticky z-20 transition-transform duration-400 transform bg-white px-5">
                <div class="">
                  <div class="fresnel-container fresnel-between-l-2xl fresnel-:R1jlagv6:"></div>
                  <div class="fresnel-container fresnel-greaterThanOrEqual-2xl fresnel-:R2jlagv6:">
                    <div class="mx-auto Wrapper_default__ARyPI px-4 2xs:px-5 l:px-10 2xl:px-5">
                      <div class="RefinementRow_container__lLT3P">
                        <div
                          class="RefinementRowItems_itemList__Nbj4h"
                          data-testid="refinement-row"
                        >
                          <div class="RefinementRowItems_priceFilterXL__pidbf">
                            <div
                              data-testid="refinement_row_element"
                              class="RefinementRowElement_refinementRowElm__t0gTf"
                            >
                              <button
                                type="button"
                                name="budget"
                                class="RefinementRowElement_refinementRowBtn__HN8kf group pt-1/2"
                                title=""
                              >
                                <strong class="mb-1 pl-3 RefinementRowElement_buttonConfigLabel__TaMA7">
                                  Price:{" "}
                                  <span class="font-normal">per night</span>
                                </strong>
                                <span class="RefinementRowElement_elementButton__iDEZD group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300">
                                  <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                    <span></span>
                                    <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                      ₹90 - ₹45,000 +
                                    </span>
                                  </span>
                                  <span
                                    class="Icon_wrapper__B6IoS Icon_m__qOPUh Icon_rotate-90__eyXMz"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      class="Icon_icon__1R9KC"
                                    >
                                      <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                      >
                                        <path
                                          vector-effect="non-scaling-stroke"
                                          d="M10 17l5-5M10 7l5 5"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                          <div class="RefinementRowItems_rowItem___GYAm">
                            <div
                              data-testid="refinement_row_element"
                              class="RefinementRowElement_refinementRowElm__t0gTf"
                            >
                              <button
                                type="button"
                                name="more_filters"
                                class="RefinementRowElement_refinementRowBtn__HN8kf group pt-1/2"
                                title="Select"
                              >
                                <strong class="mb-1 pl-3 RefinementRowElement_buttonConfigLabel__TaMA7">
                                  Filters
                                </strong>
                                <span class="RefinementRowElement_elementButton__iDEZD group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300">
                                  <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                    <span></span>
                                    <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                      Select
                                    </span>
                                  </span>
                                  <span
                                    class="Icon_wrapper__B6IoS Icon_m__qOPUh Icon_rotate-90__eyXMz"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      class="Icon_icon__1R9KC"
                                    >
                                      <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                      >
                                        <path
                                          vector-effect="non-scaling-stroke"
                                          d="M10 17l5-5M10 7l5 5"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                          <div class="RefinementRowItems_rowItem___GYAm">
                            <div
                              data-testid="refinement_row_element"
                              class="RefinementRowElement_refinementRowElm__t0gTf"
                            >
                              <button
                                type="button"
                                name="guest_rating_filters"
                                class="RefinementRowElement_refinementRowBtn__HN8kf group pt-1/2"
                                title="All"
                              >
                                <strong class="mb-1 pl-3 RefinementRowElement_buttonConfigLabel__TaMA7">
                                  Guest rating
                                </strong>
                                <span class="RefinementRowElement_elementButton__iDEZD group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300">
                                  <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                    <span></span>
                                    <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                      All
                                    </span>
                                  </span>
                                  <span
                                    class="Icon_wrapper__B6IoS Icon_m__qOPUh Icon_rotate-90__eyXMz"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      class="Icon_icon__1R9KC"
                                    >
                                      <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                      >
                                        <path
                                          vector-effect="non-scaling-stroke"
                                          d="M10 17l5-5M10 7l5 5"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                          <div class="RefinementRowItems_rowItem___GYAm">
                            <div
                              data-testid="refinement_row_element"
                              class="RefinementRowElement_refinementRowElm__t0gTf"
                            >
                              <button
                                type="button"
                                name="property_type"
                                class="RefinementRowElement_refinementRowBtn__HN8kf group pt-1/2"
                                title="Select"
                              >
                                <strong class="mb-1 pl-3 RefinementRowElement_buttonConfigLabel__TaMA7">
                                  Property type
                                </strong>
                                <span class="RefinementRowElement_elementButton__iDEZD group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300">
                                  <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                    <span></span>
                                    <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                      Select
                                    </span>
                                  </span>
                                  <span
                                    class="Icon_wrapper__B6IoS Icon_m__qOPUh Icon_rotate-90__eyXMz"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      class="Icon_icon__1R9KC"
                                    >
                                      <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                      >
                                        <path
                                          vector-effect="non-scaling-stroke"
                                          d="M10 17l5-5M10 7l5 5"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                          <div class="RefinementRowItems_rowItem___GYAm">
                            <div
                              data-testid="refinement_row_element"
                              class="RefinementRowElement_refinementRowElm__t0gTf"
                            >
                              <button
                                type="button"
                                name="location_filters"
                                class="RefinementRowElement_refinementRowBtn__HN8kf group pt-1/2"
                                title="City centre/20 km"
                              >
                                <strong class="mb-1 pl-3 RefinementRowElement_buttonConfigLabel__TaMA7">
                                  Location
                                </strong>
                                <span class="RefinementRowElement_elementButton__iDEZD group-focus:border-blue-700 border rounded-full py-1 px-3 border-grey-300">
                                  <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                    <span></span>
                                    <span class="RefinementRowElement_buttonConfigText__5tSnR">
                                      City centre
                                    </span>
                                  </span>
                                  <span
                                    class="Icon_wrapper__B6IoS Icon_m__qOPUh Icon_rotate-90__eyXMz"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      class="Icon_icon__1R9KC"
                                    >
                                      <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                      >
                                        <path
                                          vector-effect="non-scaling-stroke"
                                          d="M10 17l5-5M10 7l5 5"
                                        ></path>
                                      </g>
                                    </svg>
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {filteredData.map((item) => (
                  <>
                    <div
                      key={item.id}
                      class="swiper-slide swiper-slide-active mt-4"
                      role="group"
                      aria-label="1 / 8"
                      style={{
                        // width: "340.2px",

                        width: "326.2px",
                      }}
                    >
                      <div class="mb-home__owner-prop__card card-shadow">
                        <a
                          href="javascript:void(0);"
                          onClick={() =>
                            clickProduct(
                              item.id,
                              item.image,
                              item.image1,
                              item.image2,
                              item.image3,
                              item.type,
                              item.price,
                              item.size,
                              item.description,
                              item.rating
                            )
                          }
                        >
                          <div class="mb-home__owner-prop__card--graphic">
                            <img
                              class="swiper-lazy swiper-lazy-loaded"
                              src={item.image}
                              width="294"
                              height="156"
                              alt=""
                            />

                            <span class="mb-home__owner-prop__card--pic-count">
                              4
                            </span>
                          </div>
                          <div class="mb-home__owner-prop__card--content">
                            <div class="mb-home__owner-prop__card--type">
                              {item.type}
                            </div>
                            <div class="mb-home__owner-prop__card--price">
                              <span class="rupees">₹</span>
                              {item.price}
                              <span class="mb-home__owner-prop__card--size">
                                {item.size}
                              </span>
                            </div>
                            <div class="mb-home__owner-prop__card--loc">
                              {item.address}
                            </div>
                            <div class="mb-home__owner-prop__card--status">
                              Ready to Move
                            </div>
                            <div class="mb-home__action">
                              <span class="mb-home__action--btn btn-red medium">
                                View Details
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        )}
        <div>
          {!searched && (
            <>
              <div
                className="container"
                style={{
                  display: "inline",
                }}
              >
                <div
                  className="container-xxl custom-container"
                  style={{
                    "max-width": "1330px",
                  }}
                >
                  <div class="mb-home__section__title" style={{}}>
                    <div class="mb-home__section__title--text1 strip-orange">
                      Popular Owner Properties
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="mb-home__section__title--anchor-see-all push-right"
                    >
                      See all Properties
                    </a>
                  </div>
                  <Carousel
                    responsive={responsive}
                    containerClass="custom-carousel-container"
                    itemClass="custom-carousel-item"
                    sliderClass="custom-carousel-slider"
                  >
                    {Data1.map((item) => {
                      return (
                        <>
                          <div
                            key={item.id}
                            class="swiper-slide swiper-slide-active"
                            role="group"
                            aria-label="1 / 8"
                            style={{
                              // width: "340.2px",

                              width: "310.2px",
                            }}
                          >
                            <div class="mb-home__owner-prop__card1 card-shadow1">
                              <a
                                href="javascript:void(0);"
                                onClick={() =>
                                  clickProduct(
                                    item.id,
                                    item.image,
                                    item.image1,
                                    item.image2,
                                    item.image3,
                                    item.type,
                                    item.price,
                                    item.size,
                                    item.description,
                                    item.rating
                                  )
                                }
                              >
                                <div class="mb-home__owner-prop__card--graphic1">
                                  <img
                                    class="swiper-lazy swiper-lazy-loaded"
                                    src={item.image}
                                    width="294"
                                    height="156"
                                    alt=""
                                  />

                                  <span class="mb-home__owner-prop__card--pic-count1">
                                    4
                                  </span>
                                </div>
                                <div class="mb-home__owner-prop__card--content1">
                                  <div class="mb-home__owner-prop__card--type1">
                                    2 BHK Flat
                                  </div>
                                  <div class="mb-home__owner-prop__card--price1">
                                    <span class="rupees1">₹</span>38 Lac
                                    <span class="mb-home__owner-prop__card--size1">
                                      1250 sqft
                                    </span>
                                  </div>
                                  <div class="mb-home__owner-prop__card--loc1">
                                    Narayan Vihar, Jaipur
                                  </div>
                                  <div class="mb-home__owner-prop__card--status1">
                                    Ready to Move
                                  </div>
                                  <div class="mb-home__action1">
                                    <span class="mb-home__action--btn1 btn-red medium">
                                      View Details
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
              <div
                className="container"
                style={{
                  display: "inline",
                }}
              >
                <div
                  className="container-xxl custom-container"
                  style={{
                    "max-width": "1330px",
                  }}
                >
                  <div class="mb-home__section__title" style={{}}>
                    <div class="mb-home__section__title--text1 strip-orange">
                      Popular Owner Properties
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="mb-home__section__title--anchor-see-all push-right"
                    >
                      See all Properties
                    </a>
                  </div>
                  <Carousel
                    responsive={responsive}
                    containerClass="custom-carousel-container"
                    itemClass="custom-carousel-item"
                    sliderClass="custom-carousel-slider"
                  >
                    {Data.map((item) => {
                      return (
                        <>
                          <div
                            key={item.id}
                            class="swiper-slide swiper-slide-active"
                            role="group"
                            aria-label="1 / 8"
                            style={{
                              // width: "340.2px",

                              width: "310.2px",
                            }}
                          >
                            <div class="mb-home__owner-prop__card card-shadow">
                              <a
                                href="javascript:void(0);"
                                onClick={() =>
                                  clickProduct(
                                    item.id,
                                    item.image,
                                    item.image1,
                                    item.image2,
                                    item.image3,
                                    item.type,
                                    item.price,
                                    item.size,
                                    item.description,
                                    item.rating
                                  )
                                }
                              >
                                <div class="mb-home__owner-prop__card--graphic">
                                  <img
                                    class="swiper-lazy swiper-lazy-loaded"
                                    src={item.image}
                                    width="294"
                                    height="156"
                                    alt=""
                                  />

                                  <span class="mb-home__owner-prop__card--pic-count">
                                    4
                                  </span>
                                </div>
                                <div class="mb-home__owner-prop__card--content">
                                  <div class="mb-home__owner-prop__card--type">
                                    {item.type}
                                  </div>
                                  <div class="mb-home__owner-prop__card--price">
                                    <span class="rupees">₹</span>
                                    {item.price}
                                    <span class="mb-home__owner-prop__card--size">
                                      {item.size}
                                    </span>
                                  </div>
                                  <div class="mb-home__owner-prop__card--loc">
                                    {item.address}
                                  </div>
                                  <div class="mb-home__owner-prop__card--status">
                                    Ready to Move
                                  </div>
                                  <div class="mb-home__action">
                                    <span class="mb-home__action--btn btn-red medium">
                                      View Details
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
              <section class="ebsrpi-sec">
                <div class="container">
                  <div class="sh-title">
                    <h2>Find Your Property in Your Preferred City</h2>
                    <span></span>
                  </div>
                  <ul class="ebsrpi-list">
                    <li>
                      <a href="#" title="New Delhi Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-delhi.jpg"
                            alt=""
                            height="40"
                            width="43"
                          />
                        </div>
                        <div class="ebsrpi-title">New Delhi</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Mumbai Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-mumbai.jpg"
                            alt=""
                            height="35"
                            width="44"
                          />
                        </div>
                        <div class="ebsrpi-title">Mumbai</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Gurgaon Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-gurgaon.jpg"
                            alt=""
                            height="49"
                            width="17"
                          />
                        </div>
                        <div class="ebsrpi-title">Gurgaon</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Noida Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-noida.jpg"
                            alt=""
                            height="43"
                            width="30"
                          />
                        </div>
                        <div class="ebsrpi-title">Noida</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Bangalore Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-bangalore.jpg"
                            alt=""
                            height="39"
                            width="39"
                          />
                        </div>
                        <div class="ebsrpi-title">Bangalore</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Ahmedabad Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-ahmedabad.jpg"
                            alt=""
                            height="38"
                            width="52"
                          />
                        </div>
                        <div class="ebsrpi-title">Ahmedabad</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Kolkata Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-kolkata.jpg"
                            alt=""
                            height="48"
                            width="35"
                          />
                        </div>
                        <div class="ebsrpi-title">Kolkata</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Chennai Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-chennai.jpg"
                            alt=""
                            height="40"
                            width="43"
                          />
                        </div>
                        <div class="ebsrpi-title">Chennai</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Hyderabad Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-hyderabad.jpg"
                            alt=""
                            height="48"
                            width="34"
                          />
                        </div>
                        <div class="ebsrpi-title">Hyderabad</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Pune Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-pune.jpg"
                            alt=""
                            height="38"
                            width="35"
                          />
                        </div>
                        <div class="ebsrpi-title">Pune</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Thane Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-thane.jpg"
                            alt=""
                            height="42"
                            width="16"
                          />
                        </div>
                        <div class="ebsrpi-title">Thane</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Lucknow Property" class="ebsrpi">
                        <div class="ebsrpi-img">
                          <img
                            loading="lazy"
                            src="https://static.realestateindia.com/rei/images/topcity/ebsrpi-lucknow.jpg"
                            alt=""
                            height="42"
                            width="23"
                          />
                        </div>
                        <div class="ebsrpi-title">Lucknow</div>
                      </a>
                    </li>
                  </ul>
                  <ul class="ebcn-list">
                    <li>
                      <a href="#"> Navi Mumbai</a>
                    </li>
                    <li>
                      <a href="#"> Ghaziabad</a>
                    </li>
                    <li>
                      <a href="#"> Greater Noida</a>
                    </li>
                    <li>
                      <a href="#"> Zirakpur</a>
                    </li>
                    <li>
                      <a href="#"> Jaipur</a>
                    </li>
                    <li>
                      <a href="#"> Mohali</a>
                    </li>
                    <li>
                      <a href="#"> Bhiwadi</a>
                    </li>
                    <li>
                      <a href="#"> Nagpur</a>
                    </li>
                    <li>
                      <a href="#"> Faridabad</a>
                    </li>
                    <li>
                      <a href="#"> Surat</a>
                    </li>
                    <li>
                      <a href="#"> Goa</a>
                    </li>
                    <li>
                      <a href="#"> Sonipat</a>
                    </li>
                    <li>
                      <a href="#"> Visakhapatnam</a>
                    </li>
                    <li>
                      <a href="#"> Indore</a>
                    </li>
                    <li>
                      <a href="#"> Bhubaneswar</a>
                    </li>
                    <li>
                      <a href="#"> Vadodara</a>
                    </li>
                    <li>
                      <a href="#"> Nashik</a>
                    </li>
                    <li>
                      <a href="#"> Bhopal</a>
                    </li>
                    <li>
                      <a href="#"> Chandigarh</a>
                    </li>
                    <li>
                      <a href="#"> Ranchi</a>
                    </li>
                    <li>
                      <a href="#"> Raipur</a>
                    </li>
                    <li>
                      <a href="#"> Durgapur</a>
                    </li>
                    <li>
                      <a href="#"> Haridwar</a>
                    </li>
                    <li>
                      <a href="#"> Dehradun</a>
                    </li>
                    <li>
                      <a href="#"> Palghar</a>
                    </li>
                    <li>
                      <a href="#"> Panchkula</a>
                    </li>
                    <li>
                      <a href="#"> Shimla</a>
                    </li>
                    <li>
                      <a href="#"> Raigad</a>
                    </li>
                    <li>
                      <a href="#"> Kochi</a>
                    </li>
                    <li>
                      <a href="#"> Coimbatore</a>
                    </li>
                    <li>
                      <a href="#"> Vijayawada</a>
                    </li>
                    <li>
                      <a href="#"> Guwahati</a>
                    </li>
                    <li>
                      <a href="#"> Agra</a>
                    </li>
                    <li>
                      <a href="#"> Rewari</a>
                    </li>
                    <li>
                      <a href="#"> Ludhiana</a>
                    </li>
                    <li>
                      <a href="#"> Varanasi</a>
                    </li>
                    <li>
                      <a href="#"> Kanpur</a>
                    </li>
                    <li>
                      <a href="#"> Patna</a>
                    </li>
                    <li>
                      <a href="#"> Alwar</a>
                    </li>
                    <li>
                      <a href="#"> Rajkot</a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Jamshedpur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Siliguri
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Vapi
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Prayagraj
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Mangalore
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Solan
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Nainital
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Guntur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Silvassa
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Gandhinagar
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Udaipur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Dera Bassi
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Jalandhar
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Kozhikode
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Valsad
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Hooghly
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Aurangabad
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Howrah
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Tiruchirappalli
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Vrindavan
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Meerut
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Secunderabad
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Dhanbad
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Gwalior
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Sangli
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Bahadurgarh
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Thrissur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Dharuhera
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Mathura
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Kota
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Madurai
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Haldwani
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Satara
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Rupnagar
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Ernakulam
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Udham Singh Nagar
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Chandauli
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Thiruvananthapuram
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Moradabad
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Sindhudurg
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Hubballi
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Jodhpur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Kolhapur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Mysore
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        East Godavari
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Ajmer
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Cuttack
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Eluru
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Ratnagiri
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        North 24 Parganas
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Chandrapur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Rishikesh
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Tirupati
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Kurnool
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Manali
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Yamunanagar
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Roorkee
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Amritsar
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Asansol
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Ahmednagar
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Jabalpur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Palakkad
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Anand
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Rajahmundry
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Bharuch
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Kannur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Bilaspur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Puri
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Pondicherry
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Jalgaon
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Salem
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Aligarh
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Jamnagar
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Navsari
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Tirupur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Kakinada
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Nellore
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Thanjavur
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Durg
                      </a>
                    </li>
                    <li class="more_city_list">
                      <a href="#" title="">
                        Vizianagaram
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Show More</a>
                    </li>
                  </ul>
                </div>
              </section>

              <div
                className="container"
                style={{
                  display: "inline",
                }}
              >
                <div
                  className="container-xxl custom-container"
                  style={{
                    "max-width": "1330px",
                  }}
                >
                  <div class="mb-home__section__title" style={{}}>
                    <div class="mb-home__section__title--text1 strip-orange">
                      Popular Owner Properties
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="mb-home__section__title--anchor-see-all push-right"
                    >
                      See all Properties
                    </a>
                  </div>
                  <Carousel
                    responsive={responsive}
                    containerClass="custom-carousel-container"
                    itemClass="custom-carousel-item"
                    sliderClass="custom-carousel-slider"
                  >
                    {Data.map((item) => {
                      return (
                        <>
                          <div
                            key={item.id}
                            class="swiper-slide swiper-slide-active"
                            role="group"
                            aria-label="1 / 8"
                            style={{
                              // width: "340.2px",

                              width: "310.2px",
                            }}
                          >
                            <div class="mb-home__owner-prop__card card-shadow">
                              <a
                                href="javascript:void(0);"
                                onClick={() =>
                                  clickProduct(
                                    item.id,
                                    item.image,
                                    item.image1,
                                    item.image2,
                                    item.image3,
                                    item.type,
                                    item.price,
                                    item.size,
                                    item.description,
                                    item.rating
                                  )
                                }
                              >
                                <div class="mb-home__owner-prop__card--graphic">
                                  <img
                                    class="swiper-lazy swiper-lazy-loaded"
                                    src={item.image}
                                    width="294"
                                    height="156"
                                    alt=""
                                  />

                                  <span class="mb-home__owner-prop__card--pic-count">
                                    4
                                  </span>
                                </div>
                                <div class="mb-home__owner-prop__card--content">
                                  <div class="mb-home__owner-prop__card--type">
                                    {item.type}
                                  </div>
                                  <div class="mb-home__owner-prop__card--price">
                                    <span class="rupees">₹</span>
                                    {item.price}
                                    <span class="mb-home__owner-prop__card--size">
                                      {item.size}
                                    </span>
                                  </div>
                                  <div class="mb-home__owner-prop__card--loc">
                                    {item.address}
                                  </div>
                                  <div class="mb-home__owner-prop__card--status">
                                    Ready to Move
                                  </div>
                                  <div class="mb-home__action">
                                    <span class="mb-home__action--btn btn-red medium">
                                      View Details
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
              <div
                className="container"
                style={{
                  display: "inline",
                }}
              >
                <div
                  className="container-xxl custom-container"
                  style={{
                    "max-width": "1330px",
                  }}
                >
                  <div class="mb-home__section__title" style={{}}>
                    <div class="mb-home__section__title--text1 strip-orange">
                      Popular Owner Properties
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="mb-home__section__title--anchor-see-all push-right"
                    >
                      See all Properties
                    </a>
                  </div>
                  <Carousel
                    responsive={responsive}
                    containerClass="custom-carousel-container"
                    itemClass="custom-carousel-item"
                    sliderClass="custom-carousel-slider"
                  >
                    {Data.map((item) => {
                      return (
                        <>
                          <div
                            key={item.id}
                            class="swiper-slide swiper-slide-active"
                            role="group"
                            aria-label="1 / 8"
                            style={{
                              // width: "340.2px",

                              width: "310.2px",
                            }}
                          >
                            <div class="mb-home__owner-prop__card card-shadow">
                              <a
                                href="javascript:void(0);"
                                onClick={() =>
                                  clickProduct(
                                    item.id,
                                    item.image,
                                    item.image1,
                                    item.image2,
                                    item.image3,
                                    item.type,
                                    item.price,
                                    item.size,
                                    item.description,
                                    item.rating
                                  )
                                }
                              >
                                <div class="mb-home__owner-prop__card--graphic">
                                  <img
                                    class="swiper-lazy swiper-lazy-loaded"
                                    src={item.image}
                                    width="294"
                                    height="156"
                                    alt=""
                                  />

                                  <span class="mb-home__owner-prop__card--pic-count">
                                    4
                                  </span>
                                </div>
                                <div class="mb-home__owner-prop__card--content">
                                  <div class="mb-home__owner-prop__card--type">
                                    {item.type}
                                  </div>
                                  <div class="mb-home__owner-prop__card--price">
                                    <span class="rupees">₹</span>
                                    {item.price}
                                    <span class="mb-home__owner-prop__card--size">
                                      {item.size}
                                    </span>
                                  </div>
                                  <div class="mb-home__owner-prop__card--loc">
                                    {item.address}
                                  </div>
                                  <div class="mb-home__owner-prop__card--status">
                                    Ready to Move
                                  </div>
                                  <div class="mb-home__action">
                                    <span class="mb-home__action--btn btn-red medium">
                                      View Details
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
              <section id="aa-promo-banner">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="aa-promo-banner-area">
                        <h3>Find Your Best Property</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Doloribus, ex illum corporis quibusdam numquam
                          quisquam optio explicabo. Officiis odit quia odio
                          dignissimos eius repellat id!
                        </p>
                        <a href="#" class="aa-view-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-4">
                <section id="aa-service">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="aa-service-area">
                          <div className="aa-title">
                            <h2>Our Service</h2>
                            <span></span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Cum sit ea nobis quae vero
                              voluptatibus.
                            </p>
                          </div>
                          {/* <!-- service content --> */}
                          <div className="aa-service-content">
                            <div className="row">
                              <div className="col-md-3">
                                <div className="aa-single-service">
                                  <div className="aa-service-icon">
                                    <span class="fa">
                                      <FontAwesomeIcon icon={faHome} />
                                    </span>
                                  </div>
                                  <div className="aa-single-service-content">
                                    <h4>
                                      <a href="#">Property Sale</a>
                                    </h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Iusto repellendus quasi
                                      asperiores itaque dolorem at.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="aa-single-service">
                                  <div className="aa-service-icon">
                                    <span class="fa">
                                      <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                  </div>
                                  <div className="aa-single-service-content">
                                    <h4>
                                      <a href="#">Property Rent</a>
                                    </h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Iusto repellendus quasi
                                      asperiores itaque dolorem at.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="aa-single-service">
                                  <div className="aa-service-icon">
                                    <span class="fa">
                                      <FontAwesomeIcon icon={faCrosshairs} />
                                    </span>
                                  </div>
                                  <div className="aa-single-service-content">
                                    <h4>
                                      <a href="#">Property Development</a>
                                    </h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Iusto repellendus quasi
                                      asperiores itaque dolorem at.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="aa-single-service">
                                  <div className="aa-service-icon">
                                    <span class="fa">
                                      <FontAwesomeIcon icon={faBarChart} />
                                    </span>
                                  </div>
                                  <div className="aa-single-service-content">
                                    <h4>
                                      <a href="#">Market Analysis</a>
                                    </h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Iusto repellendus quasi
                                      asperiores itaque dolorem at.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
