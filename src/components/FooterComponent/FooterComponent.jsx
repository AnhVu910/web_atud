import { Divider, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";
import { ParagraphFooter, TypographyFooter } from "./style";

const FooterComponent = () => {
  return (
    <div>
      <Divider />
      <div style={{ padding: "0 200px" }}>
        <TypographyFooter>
          <Title level={5}>
            Chợ 2hand - Chợ Mua Bán, Rao Vặt Trực Tuyến Hàng Đầu Của Người Việt
          </Title>
          <ParagraphFooter>
            Chợ 2hand chính thức gia nhập thị trường Việt Nam vào đầu năm 2023,
            với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối
            người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn
            giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ.
          </ParagraphFooter>
          <ParagraphFooter>
            Đến nay, Chợ 2hand tự hào là Website rao vặt được ưa chuộng hàng đầu
            Việt Nam. Hàng ngàn món hời từ Bất động sản, Nhà cửa, Xe cộ, Đồ điện
            tử, Thú cưng, Vật dụng cá nhân... đến tìm việc làm, thông tin tuyển
            dụng, các dịch vụ - du lịch được đăng tin, rao bán trên Chợ 2hand.
          </ParagraphFooter>
        </TypographyFooter>
      </div>
    </div>
  );
};

export default FooterComponent;
