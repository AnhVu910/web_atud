import { Col, Row } from "antd";
import styled from "styled-components";
export const WrappNavbar = styled.div`
  background-color: #fff;
  height: 165px;
`;

export const WrappNavbarText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #413737;
  padding: 10px 10px;
`;

export const SpanNavbarText = styled.span`
  width: 110px;
  height: 35px;
  margin-top: 8px;
`;
export const RowNavbar = styled(Row)`
  text-align: center;
`;

export const ColNavbar = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
