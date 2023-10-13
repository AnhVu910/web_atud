import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import { Pagination } from "antd";
import { WrappPaginTypeProduct } from "./style";

const TypeProductPage = () => {
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
      </div>
      <WrappPaginTypeProduct>
        <Pagination
          showSizeChanger
          //   onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
      </WrappPaginTypeProduct>
    </div>
  );
};

export default TypeProductPage;
