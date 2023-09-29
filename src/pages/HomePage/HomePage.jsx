import { Col, Row } from "antd";
import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";

const HomePage = () => {
  return (
    <div style={{ padding: "0 200px" }}>
      <div style={{paddingTop: "15px"}}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>
    </div>
  );
};

export default HomePage;
