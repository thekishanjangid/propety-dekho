import React from "react";
import { Data } from "./Data";
import { useLocation, useNavigate } from "react-router-dom";

const Properties = () => {
  const navigate = useNavigate();

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

  return (
    <>
      <div
        className="container"
        style={{
          display: "inline",
        }}
      >
        <div
          className="container-xxl row mt-5 custom-container"
          style={{
            "margin-left": "auto", "margin-right": "auto",
            maxWidth: "1370px", 
          }}
        >
          <div className="mb-home__section__title" style={{}}>
            <div className="mb-home__section__title--text1 strip-orange">
              Popular Owner Properties
            </div>
          </div>

          {Data.map((item) => {
            return (
              <div
                key={item.id}
                className="swiper-slide swiper-slide-active mb-4" 
                role="group"
                aria-label="1 / 8"
                style={{
                  width: "335.2px",
                }}
              >
                <div className="mb-home__owner-prop__card1 card-shadow1"> 
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
                    <div className="mb-home__owner-prop__card--graphic1"> 
                      <img
                        className="swiper-lazy swiper-lazy-loaded" 
                        src={item.image}
                        width="294"
                        height="156"
                        alt=""
                      />
                      <span className="mb-home__owner-prop__card--pic-count1"> 
                        4
                      </span>
                    </div>
                    <div className="mb-home__owner-prop__card--content1"> 
                      <div className="mb-home__owner-prop__card--type1"> 
                        2 BHK Flat
                      </div>
                      <div className="mb-home__owner-prop__card--price1"> 
                        <span className="rupees1">₹</span>38 Lac
                        <span className="mb-home__owner-prop__card--size1"> 
                          1250 sqft
                        </span>
                      </div>
                      <div className="mb-home__owner-prop__card--loc1"> 
                        Narayan Vihar, Jaipur
                      </div>
                      <div className="mb-home__owner-prop__card--status1"> 
                        Ready to Move
                      </div>
                      <div className="mb-home__action1"> 
                        <span className="mb-home__action--btn1 btn-red medium"> 
                          View Details
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Properties;
