import { Col, Row } from "antd";
import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
  return (
    <div style={{ padding: "0 200px" }}>
      <div style={{ padding: "15px 0" }}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>
      <div
        style={{
          display: "flex",
          alignitems: "center",
          gap: "20px",
        }}
      >
        <CardComponent />
      </div>
    </div>
  );
};

export default HomePage;
