import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ShoppingOutlined } from "@ant-design/icons";

export const ShoppingOutline = styled(ShoppingOutlined)`
  font-size: 30px;
  color: antiquewhite;
`;

export const WrapperHeader = styled(Row)`
  background-color: #599ff5;
  align-items: center;
  text-align: center;
  flex-wrap: nowrap;
  width: 100%;
  padding: 10px 0;
`;

export const WrapperTextHeader = styled(Link)`
  font-size: 30px;
  color: antiquewhite;
  font-weight: bold;
  font-family: fantasy;
  font-style: italic;
  padding-left: 10px;
  &:hover {
    font-size: 30px;
    color: #fff;
  }
`;

export const WrapperHeaderAccout = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  max-width: 200px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;

export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;
