import React from "react";
import "./Ourservices.css";
import pic1 from "../../assets/pic2.jpg";
import pic2 from "../../assets/pic5.jpg";
import pic3 from "../../assets/pic8.jpg";
import pic4 from "../../assets/pc1.jpg";

export default function Ourservices() {
  return (
    <div id="services">
      <h3>Our Services</h3>
      <div className="services">
        <div>
          <img src={pic1} alt="" />
          <h2>VETERINARY PRODUCT</h2>
          <ul>
            <li>Drugs</li>
            <li>Chemical</li>
            <li>Vaccines</li>
            <li>Instruments</li>
          </ul>
        </div>
        <div>
          <img src={pic2} alt="" />
          <h2>AGRICULTURAL INPUT</h2>
          <ul>
            <li>Seeds</li>
            <li>Pesticides</li>
            <li>Fertilizers</li>
            <li>Knapsack</li>
            <li>Instruments</li>
          </ul>
        </div>
        <div>
          <img src={pic3} alt="" />
          <h2>VETERINARY SERVICES</h2>
          <ul>
            <li>Disease diagnosis and treatment</li>
            <li>Vaccination and animal management</li>
            <li>Artificial Insemination (Cattle and pig)</li>
          </ul>
        </div>
        <div>
          <img src={pic4} alt="" />
          <h2>OTHERS</h2>
          <ul>
            <li>Training on livestock keeping</li>
            <li>Crop production</li>
            <li>Greenhouse installation</li>
            <li>Poultry cages installation</li>
            <li>Animal feeds</li>
            <li>Nutritional suppliments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
