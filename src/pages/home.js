import React, { useState } from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home(props) {
  const [activeState, setActiveState] = useState(false);
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
            <OptForm.WrapDescription
              active={activeState}
              onClick={() => setActiveState(true)}
            />
            {props.childrens}
            <OptForm.Button onClick={() => setActiveState(true)}>
              Bắt đầu
            </OptForm.Button>
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
