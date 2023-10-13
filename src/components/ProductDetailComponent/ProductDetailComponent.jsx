import { Button, Col, Image, Row } from "antd";
import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Conan from "../../assets/images/test.webp";
import {
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperButton,
} from "./style";
import { StarFilled, MinusOutlined, PlusOutlined } from "@ant-design/icons";

const ProductDetailComponent = () => {
  return (
    <div>
      <Row
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "4px",
          height: "100%",
        }}
      >
        <Col
          span={10}
          style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
        >
          <Image
            src={Conan}
            alt="anh"
            preview="false"
            style={{ border: "solid 1px #bfb4b4" }}
          />
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            <WrapperStyleColImage span={4} sty>
              <WrapperStyleImageSmall
                width={60}
                height={69}
                src={
                  "https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tap-100---ban-thuong_3.jpg"
                }
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={
                  "https://salt.tikicdn.com/cache/w1200/ts/product/60/76/bb/8de98a2a0233e62234efc85d03cb2d6d.jpg"
                }
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                width={60}
                height={69}
                src={
                  "https://product.hstatic.net/200000280811/product/tham-tu-lung-danh-conan-tap-100-09_a7dd0b53528d410da5416a800a9573bd_fb2f7c27647d481595141822a1ab7bb7_master.jpg"
                }
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                width={60}
                height={69}
                src={
                  "https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-conan---tuyen-tap-dac-biet---nhung-cau-chuyen-lang-man---t3.jpg"
                }
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                width={60}
                height={69}
                src={
                  "https://cdn0.fahasa.com/media/catalog/product/t/h/tham_tu_lung_danh_conan_60_sdb.jpg"
                }
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                width={60}
                height={69}
                src={
                  "https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tap-100---ban-thuong_3.jpg"
                }
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span={14} style={{ paddingLeft: "25px" }}>
          <WrapperStyleNameProduct>
            Sách - Thám tử lừng danh conan - Combo 10 tập từ tập 81 đến tập 100
          </WrapperStyleNameProduct>
          <div>
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
            />
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
            />
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
            />
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
            />
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
            />
            <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>200.000 VNĐ</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className="address">Đà Nẵng</span> -
            <span className="change-address">Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <div
            style={{
              margin: "10px 0 20px",
              padding: "10px 0",
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <div style={{ marginBottom: "10px" }}>Số lượng</div>
            <WrapperQualityProduct>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                // onClick={() => handleChangeCount("decrease", numProduct === 1)}
              >
                <MinusOutlined style={{ color: "#000", fontSize: "14px" }} />
              </button>
              <WrapperInputNumber
                // onChange={onChange}
                defaultValue={1}
                // max={productDetails?.countInStock}
                min={1}
                // value={numProduct}
                size="small"
              />
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                // onClick={() =>
                //   handleChangeCount(
                //     "increase",
                //     numProduct === productDetails?.countInStock
                //   )
                // }
              >
                <PlusOutlined style={{ color: "#000", fontSize: "14px" }} />
              </button>
            </WrapperQualityProduct>
          </div>
          <div style={{ display: "flex", aliggItems: "center", gap: "12px" }}>
            <div>
              <WrapperButton
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  background: "rgb(255, 57, 69)",
                  color: "#fff",
                }}
                // onClick={handleAddOrderProduct}
              >
                Chọn mua
              </WrapperButton>
              {/* {errorLimitOrder && (
                <div style={{ color: "red" }}>San pham het hang</div>
              )} */}
            </div>

            <WrapperButton
              style={{
                fontSize: "15px",
                color: "rgb(13, 92, 182)",
                border: "1px solid rgb(13, 92, 182)",
              }}
            >
              Mua trả sau
            </WrapperButton>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
