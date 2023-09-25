import { Col } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import { WrapperHeader, WrapperTextHeader } from "./style";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>CHỢ 2HAND</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="Nhập từ khóa tìm kiếm..."
            // onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col span={6}> colum 3</Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
