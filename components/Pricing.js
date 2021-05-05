import React from "react";
import "../styles/Pricing.module.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-slider center-content">
        <label className="form-slider">
          <input
            type="range"
            className="inputRange"
            data-price-input='{
                "0": "1,000",
                "1": "1,250",
                "2": "1,500",
                "3": "2,000",
                "4": "2,500",
                "5": "3,500",
                "6": "6,000",
                "7": "15,000",
                "8": "50,000",
                "9": "50,000+"                        
              }'
          />
        </label>
        <div className="pricing-slider-value"></div>
      </div>
    </div>
  );
};

export default Pricing;
