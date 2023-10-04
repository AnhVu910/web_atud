import { Col, Row } from "antd";
import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { ButtonMore } from "./style";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
  return (
    <div style={{ padding: "0 200px" }}>
      <div style={{ padding: "15px 0" }}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>
      <div style={{ paddingBottom: "15px" }}>
        <NavbarComponent />
      </div>
      <div
        style={{
          display: "flex",
          alignitems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <ButtonMore
          textButton={"Xem thêm"}
          type="outline"
          styleButton={{
            border: "1px solid rgb(11, 116,229)",
            color: "rgb(11, 116,229)",
            width: "240px",
            height: "38px",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
