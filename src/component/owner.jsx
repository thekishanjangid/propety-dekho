import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./owner.css";

const Owner = () => {
  const [dealerType, setDealerType] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [lookingTo, setLookingTo] = useState(null);
  const [apartmentTypeId, setApartmentTypeId] = useState(null);
  const [bhkTypeId, setBhkTypeId] = useState(null);
  const [furnishTypeId, setFurnishTypeId] = useState(null);

  const [builtUpArea, setBuiltUpArea] = useState("");
  const [cost, setCost] = useState("");
  const [buildingProjectSociety, setBuildingProjectSociety] = useState("");
  const [locality, setLocality] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState({
    dealerType: "",
    propertyType: "",
    lookingTo: "",
    apartmentTypeId: "",
    bhkTypeId: "",
    furnishTypeId: "",
    builtUpArea: "",
    cost: "",
    buildingProjectSociety: "",
    locality: "",
    images: "",
  });

  const handleValidation = () => {
    let isValid = true;
    const newError = { ...error };

    if (!dealerType) {
      newError.dealerType = "DealerType type is required";
      isValid = false;
    } else {
      newError.dealerType = "";
    }

    if (!propertyType) {
      newError.propertyType = "Property type is required";
      isValid = false;
    } else {
      newError.propertyType = "";
    }

    if (!lookingTo) {
      newError.lookingTo = "Looking to is required";
      isValid = false;
    } else {
      newError.lookingTo = "";
    }

    if (!propertyType) {
      newError.propertyType = "Property type ID is required";
      isValid = false;
    } else {
      newError.propertyType = "";
    }

    if (!apartmentTypeId) {
      newError.apartmentTypeId = "Apartment type ID is required";
      isValid = false;
    } else {
      newError.apartmentTypeId = "";
    }

    if (!bhkTypeId) {
      newError.bhkTypeId = "BHK type ID is required";
      isValid = false;
    } else {
      newError.bhkTypeId = "";
    }

    if (!furnishTypeId) {
      newError.furnishTypeId = "Furnish type ID is required";
      isValid = false;
    } else {
      newError.furnishTypeId = "";
    }

    if (!builtUpArea) {
      newError.builtUpArea = "Built Up Area is required";
      isValid = false;
    } else {
      newError.builtUpArea = "";
    }

    if (!cost) {
      newError.cost = "Cost is required";
      isValid = false;
    } else {
      newError.cost = "";
    }

    if (!buildingProjectSociety) {
      newError.buildingProjectSociety = "Building/Project/Society is required";
      isValid = false;
    } else {
      newError.buildingProjectSociety = "";
    }

    if (!locality) {
      newError.locality = "Locality is required";
      isValid = false;
    } else {
      newError.locality = "";
    }

    if (images.length < 4) {
      newError.images = "At least 4 images are required";
      isValid = false;
    } else {
      newError.images = "";
    }

    setError(newError);
    return isValid;
  };

  const handleListProperty = () => {
    if (handleValidation()) {
      // Retrieve existing data from localStorage
      const existingData =
        JSON.parse(localStorage.getItem("propertyData")) || [];

      // Ensure that existingData is an array
      const updatedData = Array.isArray(existingData) ? existingData : [];

      // Combine existing data with the new data
      const newData = {
        dealerType,
        propertyType,
        lookingTo,
        apartmentTypeId,
        bhkTypeId,
        furnishTypeId,
        builtUpArea,
        cost,
        buildingProjectSociety,
        locality,
        images,
      };

      // Add the new data to the existing data
      updatedData.push(newData);

      // Save the updated data to localStorage
      localStorage.setItem("propertyData", JSON.stringify(updatedData));

      // Redirect or perform other actions
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleDealerTypeChange = (type) => {
    setDealerType(type);
  };
  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
  };

  const handleLookingToChange = (type) => {
    setLookingTo(type);
  };

  const handleApartmentTypeChange = (type) => {
    setApartmentTypeId(type);
  };
  const handleBhkTypeChange = (type) => {
    setBhkTypeId(type);
  };
  const handleFurnishTypeChange = (type) => {
    setFurnishTypeId(type);
  };

  // Event handler to update the builtUpArea state
  const handleBuiltUpAreaChange = (event) => {
    setBuiltUpArea(event.target.value);
  };

  // Event handler to update the cost state
  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  // Event handler to update the buildingProjectSociety state
  const handleBuildingProjectSocietyChange = (event) => {
    setBuildingProjectSociety(event.target.value);
  };

  // Event handler to update the locality state
  const handleLocalityChange = (event) => {
    setLocality(event.target.value);
  };

  return (
    <div
      class="main-div"
      style={{ display: "flex", "justify-content": "center" }}
    >
      <section class="css-f3w6ha">
        <div class="css-v8jck">
          <div class="css-eiz9fm">
            <i class="icon icon-arrow-left css-bxeng9"></i>Add Property Details
          </div>
          <div class="css-1k4zm6e">
            <div class="css-1npsx2h">
              <div class="css-13t580j">
                <div class="form-cont">
                  <div class="field horizontal-free-scroll first-form-field">
                    <div class="group">
                      <div class="title no-bottom">I am</div>
                      <div>
                        <div class="rf-group radio-group category">
                          <div
                            className={`rf-toggle radio radio-0 toggle-tag pills ${
                              dealerType === "Owner" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleDealerTypeChange("Owner")}
                          >
                            <div class="toggle-label">Owner</div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-1 toggle-tag pills ${
                              dealerType === "Agent" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleDealerTypeChange("Agent")}
                          >
                            <div class="toggle-label">Agent</div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-2 toggle-tag pills ${
                              dealerType === "Builder" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleDealerTypeChange("Builder")}
                          >
                            <div class="toggle-label">Builder</div>
                          </div>
                        </div>
                        {error.dealerType && (
                          <p className="error-message">{error.dealerType}</p>
                        )}

                        <div class="errorStyle"></div>
                      </div>
                      <div class="title no-bottom">Property Type</div>
                      <div>
                        <div class="rf-group radio-group category">
                          <div
                            className={`rf-toggle radio radio-0 toggle-tag pills ${
                              propertyType === "Residential"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handlePropertyTypeChange("Residential")
                            }
                          >
                            <div class="toggle-label">Residential</div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-1 toggle-tag pills ${
                              propertyType === "Commercial"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handlePropertyTypeChange("Commercial")
                            }
                          >
                            <div class="toggle-label">Commercial</div>
                          </div>
                        </div>
                        {error.propertyType && (
                          <p className="error-message">{error.propertyType}</p>
                        )}

                        <div class="errorStyle"></div>
                      </div>
                      <div class="title no-bottom">Looking to</div>
                      <div class="rf-group radio-group service">
                        <div
                          className={`rf-toggle radio radio-0 toggle-tag pills ${
                            lookingTo === "Rent" ? "toggle-active" : ""
                          }`}
                          onClick={() => handleLookingToChange("Rent")}
                        >
                          <div class="toggle-label">Rent</div>
                        </div>
                        <div
                          className={`rf-toggle radio radio-1 toggle-tag pills ${
                            lookingTo === "Sell" ? "toggle-active" : ""
                          }`}
                          onClick={() => handleLookingToChange("Sell")}
                        >
                          <div class="toggle-label">Sell</div>
                        </div>
                        <div
                          className={`rf-toggle radio radio-2 toggle-tag pills ${
                            lookingTo === "PG/Co-living" ? "toggle-active" : ""
                          }`}
                          onClick={() => handleLookingToChange("PG/Co-living")}
                        >
                          <div class="toggle-label">PG/Co-living</div>
                        </div>
                      </div>
                      {error.lookingTo && (
                        <p className="error-message">{error.lookingTo}</p>
                      )}

                      <div class="errorStyle"></div>

                      <div class="title no-bottom">Property Type</div>
                      <div>
                        <div class="rf-group radio-group property_type_id">
                          <div
                            className={`rf-toggle radio radio-0 toggle-tag pills ${
                              apartmentTypeId === "Apartment"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handleApartmentTypeChange("Apartment")
                            }
                          >
                            <div class="toggle-label">
                              <div class="property-type">
                                <div class="property-icon apartment"></div>
                                <div class="property-type-label">Apartment</div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-1 toggle-tag pills ${
                              apartmentTypeId === "Independent Floor"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handleApartmentTypeChange("Independent Floor")
                            }
                          >
                            <div class="toggle-label">
                              <div class="property-type">
                                <div class="property-icon independent floor"></div>
                                <div class="property-type-label">
                                  Independent Floor
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-2 toggle-tag pills ${
                              apartmentTypeId === "Independent House"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handleApartmentTypeChange("Independent House")
                            }
                          >
                            <div class="toggle-label">
                              <div class="property-type">
                                <div class="property-icon independent house"></div>
                                <div class="property-type-label">
                                  Independent House
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-3 toggle-tag pills ${
                              apartmentTypeId === "Villa" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleApartmentTypeChange("Villa")}
                          >
                            <div class="toggle-label">
                              <div class="property-type">
                                <div class="property-icon villa"></div>
                                <div class="property-type-label">Villa</div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-4 toggle-tag pills ${
                              apartmentTypeId === "Plot" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleApartmentTypeChange("Plot")}
                          >
                            <div class="toggle-label">
                              <div class="property-type">
                                <div class="property-icon plot"></div>
                                <div class="property-type-label">Plot</div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-5 toggle-tag pills ${
                              apartmentTypeId === "Agricultural Land"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handleApartmentTypeChange("Agricultural Land")
                            }
                          >
                            <div class="toggle-label">
                              <div class="property-type">
                                <div class="property-icon agricultural land"></div>
                                <div class="property-type-label">
                                  Agricultural Land
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {error.apartmentTypeId && (
                          <p className="error-message">
                            {error.apartmentTypeId}
                          </p>
                        )}

                        <div class="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="css-1pt2cfh">
                      <div className="material-input dropdownContainer">
                        <input
                          type="text"
                          value={buildingProjectSociety}
                          onChange={handleBuildingProjectSocietyChange}
                          className={buildingProjectSociety ? "has-value" : ""}
                        />
                        <label
                          className={
                            buildingProjectSociety ? "label hidden" : "label"
                          }
                        >
                          Building/Project/Society
                        </label>
                        <ul className="result-cont"></ul>
                      </div>
                      {error.buildingProjectSociety && (
                        <p className="error-message">
                          {error.buildingProjectSociety}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Input field for Locality */}
                  <div className="field">
                    <div className="css-1pt2cfh">
                      <div className="material-input dropdownContainer">
                        <input
                          type="text"
                          value={locality}
                          onChange={handleLocalityChange}
                          className={locality ? "has-value" : ""}
                        />
                        <label className={locality ? "label hidden" : "label"}>
                          Locality
                        </label>
                        <ul className="result-cont"></ul>
                      </div>
                      {error.locality && (
                        <p className="error-message">{error.locality}</p>
                      )}
                    </div>
                  </div>

                  <div class="field horizontal-free-scroll">
                    <div class="group">
                      <div class="title no-bottom">BHK</div>
                      <div>
                        <div class="rf-group radio-group apartment_type_id">
                          <div
                            className={`rf-toggle radio radio-0 toggle-tag pills ${
                              bhkTypeId === "1 RK" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleBhkTypeChange("1 RK")}
                          >
                            <div class="toggle-label">
                              <div class="apartment-type">1 RK</div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-1 toggle-tag pills ${
                              bhkTypeId === "1 BHK" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleBhkTypeChange("1 BHK")}
                          >
                            <div class="toggle-label">
                              <div class="apartment-type">1 BHK</div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-2 toggle-tag pills ${
                              bhkTypeId === "2 BHK" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleBhkTypeChange("2 BHK")}
                          >
                            <div class="toggle-label">
                              <div class="apartment-type">2 BHK</div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-3 toggle-tag pills ${
                              bhkTypeId === "3 BHK" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleBhkTypeChange("3 BHK")}
                          >
                            <div class="toggle-label">
                              <div class="apartment-type">3 BHK</div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-4 toggle-tag pills ${
                              bhkTypeId === "3+ BHK" ? "toggle-active" : ""
                            }`}
                            onClick={() => handleBhkTypeChange("3+ BHK")}
                          >
                            <div class="toggle-label">3+ BHK</div>
                          </div>
                        </div>
                        {error.bhkTypeId && (
                          <p className="error-message">{error.bhkTypeId}</p>
                        )}

                        <div class="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    {/* Input field for Built Up Area */}
                    <div className="material-input dropdownContainer">
                      <input
                        type="text"
                        value={builtUpArea}
                        onChange={handleBuiltUpAreaChange}
                        className={builtUpArea ? "has-value" : ""}
                      />
                      <label className={builtUpArea ? "label hidden" : "label"}>
                        Built Up Area
                      </label>
                      <span className="helper"> Sq. ft.</span>
                      <ul className="result-cont"></ul>
                    </div>
                    {error.builtUpArea && (
                      <p className="error-message">{error.builtUpArea}</p>
                    )}

                    {/* Input field for Cost */}
                    <div className="material-input dropdownContainer">
                      <input
                        type="text"
                        value={cost}
                        onChange={handleCostChange}
                        className={cost ? "has-value" : ""}
                      />
                      <label className={cost ? "label hidden" : "label"}>
                        Cost
                      </label>
                      <span className="helper">Rupees</span>
                      <ul className="result-cont"></ul>
                    </div>
                    {error.cost && (
                      <p className="error-message">{error.cost}</p>
                    )}
                  </div>
                  <div class="field horizontal-free-scroll">
                    <div class="group">
                      <div class="title no-bottom">Furnish Type</div>
                      <div>
                        <div class="rf-group radio-group furnish_type_id">
                          <div
                            className={`rf-toggle radio radio-0 toggle-tag pills ${
                              furnishTypeId === "Fully Furnished"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handleFurnishTypeChange("Fully Furnished")
                            }
                          >
                            <div class="toggle-label">
                              <div class="furnish-type">
                                <i class="furnish-icon icon-furnished"></i>
                                <span>Fully Furnished</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-1 toggle-tag pills ${
                              furnishTypeId === "Semi Furnished"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handleFurnishTypeChange("Semi Furnished")
                            }
                          >
                            <div class="toggle-label">
                              <div class="furnish-type">
                                <i class="furnish-icon icon-semi_furnished"></i>
                                <span>Semi Furnished</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`rf-toggle radio radio-2 toggle-tag pills ${
                              furnishTypeId === "Unfurnished"
                                ? "toggle-active"
                                : ""
                            }`}
                            onClick={() =>
                              handleFurnishTypeChange("Unfurnished")
                            }
                          >
                            <div class="toggle-label">
                              <div class="furnish-type">
                                <i class="furnish-icon icon-unfurnished"></i>
                                <span>Unfurnished</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {error.furnishTypeId && (
                          <p className="error-message">{error.furnishTypeId}</p>
                        )}

                        <div class="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="addPhotos_addPhotosbox__QBIaz   pageComponent"
                    data-label="UPLOAD_PHOTOS_CLICK"
                    id="photo-upload"
                  >
                    <img
                      src="data:image/png;base64,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"
                      alt="upload photos"
                      style={{ width: "49px", height: "34px" }}
                    />
                    <div class="addPhotos_textContainer__2iQJ8 caption_strong_medium">
                      <span class="addPhotos_addPhotosText__8GzHO caption_strong_medium">
                        + Add atleast 4 photos
                      </span>
                      <br />
                      <span class="vert-align-middle">
                        Drag and drop your photos here
                      </span>
                    </div>
                    <div class="addPhotos_textContainer__2iQJ8 caption_strong_small">
                      Upto 50 photos • Max. size 10 MB • Formats: png, jpg,
                      jpeg, gif, webp, heic, heif.
                    </div>
                    <div class="addPhotos_textContainer__2iQJ8 addPhotos_uploadButton__xS1yH caption_strong_medium">
                      <button
                        type="button"
                        variant="secondaryRegular"
                        font-style="semi"
                        as="a"
                        href=""
                        class="pageComponent
                buttons_secondaryRegular__3R1_d
                buttons_semi__1it_o
								 undefined btn-image"
                      >
                        <span>Upload Photos Now</span>

                        <input
                          id="file-input"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          multiple
                        />
                      </button>
                    </div>
                  </div>
                  {error.images && (
                    <p className="error-message">{error.images}</p>
                  )}

                  <div className="image-preview">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Uploaded ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div class="css-bylwsl">
                  <button
                    className="selfupload-cta-button css-1olr0sc"
                    onClick={handleListProperty}
                  >
                    List Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Owner;
