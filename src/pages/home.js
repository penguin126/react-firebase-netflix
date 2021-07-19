import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Chương trình truyền hình, phim không giới hạn và nhiều nội dung
            khác.
          </Feature.Title>
          <Feature.SubTitle>
            Xem ở mọi nơi. Hủy bất kỳ lúc nào.
          </Feature.SubTitle>
          <OptForm.Text>
            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
            cách thành viên của bạn.
          </OptForm.Text>
          <OptForm>
            <OptForm.WrapDescription />
            <OptForm.Button>Bắt đầu</OptForm.Button>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
