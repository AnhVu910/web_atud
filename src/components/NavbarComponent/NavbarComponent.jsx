import { Col } from "antd";
import React from "react";
import {
  ColNavbar,
  RowNavbar,
  SpanNavbarText,
  WrappNavbar,
  WrappNavbarText,
} from "./style";
import dodientu from "../../assets/images/dodt.webp";
import dogiadung from "../../assets/images/dogd.webp";
import dothoitrang from "../../assets/images/thoitrang.webp";
import xeco from "../../assets/images/xeco.webp";
import thucung from "../../assets/images/thucung.webp";
import noithat from "../../assets/images/noithat.webp";

const NavbarComponent = () => {
  return (
    <WrappNavbar>
      <WrappNavbarText>Khám phá danh mục</WrappNavbarText>
      <div style={{ margin: "5px 8px" }}>
        <RowNavbar gutter={16}>
          <ColNavbar className="gutter-row" span={4}>
            <img src={dodientu} width={"84px"} height={"84px"} />
            <SpanNavbarText>Đồ điện tử</SpanNavbarText>
          </ColNavbar>
          <ColNavbar className="gutter-row" span={4}>
            <img src={dogiadung} width={"84px"} height={"84px"} />
            <SpanNavbarText>Đồ gia dụng</SpanNavbarText>
          </ColNavbar>
          <ColNavbar className="gutter-row" span={4}>
            <img src={dothoitrang} width={"84px"} height={"84px"} />
            <SpanNavbarText>Thời trang</SpanNavbarText>
          </ColNavbar>
          <ColNavbar className="gutter-row" span={4}>
            <img src={xeco} width={"84px"} height={"84px"} />
            <SpanNavbarText>Xe cộ</SpanNavbarText>
          </ColNavbar>
          <ColNavbar className="gutter-row" span={4}>
            <img src={thucung} width={"84px"} height={"84px"} />
            <SpanNavbarText>Thú cưng</SpanNavbarText>
          </ColNavbar>
          <ColNavbar className="gutter-row" span={4}>
            <img src={noithat} width={"84px"} height={"84px"} />
            <SpanNavbarText>Đồ nội thất</SpanNavbarText>
          </ColNavbar>
        </RowNavbar>
      </div>
    </WrappNavbar>
  );
};

export default NavbarComponent;
