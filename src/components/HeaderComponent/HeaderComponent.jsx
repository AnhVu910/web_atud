import { Col } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import {
  ShoppingOutline,
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccout,
} from "./style";
import {
  UserOutlined,
  ShopOutlined,
  HomeOutlined,
  CarOutlined,
  UsergroupAddOutlined,
  WechatOutlined,
  QuestionCircleOutlined,
  DownloadOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <div>
      <div className="header">
        <WrapperHeader>
          <Col span={2}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <ShopOutlined />
              <span style={{ paddingLeft: "5px" }}>Chợ tốt</span>
            </div>
          </Col>
          <Col span={2}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <HomeOutlined />
              <span style={{ paddingLeft: "5px" }}>Nhà tốt</span>
            </div>
          </Col>
          <Col span={2}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <CarOutlined />
              <span style={{ paddingLeft: "5px" }}>Chợ tốt xe</span>
            </div>
          </Col>
          <Col span={2}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <UsergroupAddOutlined />
              <span style={{ paddingLeft: "5px" }}>Việc làm tốt</span>
            </div>
          </Col>
          <Col span={8}> </Col>
          <Col span={3}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <WechatOutlined />
              <span style={{ paddingLeft: "5px" }}> Đóng góp ý kiến</span>
            </div>
          </Col>
          <Col span={2}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <QuestionCircleOutlined />
              <span style={{ paddingLeft: "5px" }}> Trợ giúp</span>
            </div>
          </Col>
          <Col span={2}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
              }}
            >
              <DownloadOutlined />
              <span style={{ paddingLeft: "5px" }}> Tải ứng dụng</span>
            </div>
          </Col>
        </WrapperHeader>
        <WrapperHeader>
          <Col span={6}>
            <ShoppingOutline />
            <WrapperTextHeader>CHỢ 2HAND</WrapperTextHeader>
          </Col>
          <Col span={12}>
            <Search
              placeholder="Tìm kiếm sản phẩm trên Chợ 2hand..."
              // onSearch={onSearch}
              enterButton
            />
          </Col>
          <Col span={3}>
            <WrapperHeaderAccout>
              <UserOutlined style={{ fontSize: "25px" }} />
              <span style={{ fontSize: "15px" }}>Đăng nhập</span>
            </WrapperHeaderAccout>
          </Col>
          <Col span={3}>
            <WrapperHeaderAccout>
              <ShoppingCartOutlined style={{ fontSize: "25px" }} />
              <span style={{ fontSize: "15px" }}>Giỏ hàng</span>
            </WrapperHeaderAccout>
          </Col>
        </WrapperHeader>
      </div>
    </div>
  );
};

export default HeaderComponent;
