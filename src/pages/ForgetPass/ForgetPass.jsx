import { Image } from "antd";
import React from "react";
import InputForm from "../../components/InputForm/InputForm";
import { WrapperButton } from "../../components/ProductDetailComponent/style";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
} from "../SignUpPage/style";
import imageLogo from "../../assets/images/logo-login.png";

const ForgetPass = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Đặt lại mật khẩu</h1>
          <p>Nhập email để đặt lại mật khẩu của bạn</p>
          <InputForm style={{ marginBottom: "15px" }} placeholder="Email" />

          <WrapperButton
            style={{
              fontSize: "15px",
              fontWeight: "700",
              background: "rgb(255, 57, 69)",
              color: "#fff",
              width: "100%",
              margin: "26px 0 10px",
            }}
            // onClick={handleAddOrderProduct}
          >
            Reset
          </WrapperButton>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="iamge-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại Chợ 2hand</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default ForgetPass;
