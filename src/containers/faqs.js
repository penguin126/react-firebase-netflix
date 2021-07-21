import React, { useState } from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';

export function FaqsContainer() {
  const [activeState, setActiveState] = useState(false);
  return (
    <Accordion>
      <Accordion.Title>Câu hỏi thường gặp</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm.Text>
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
        thành viên của bạn.
      </OptForm.Text>
      <OptForm>
        <OptForm.WrapDescription
          active={activeState}
          onClick={() => setActiveState(true)}
        />
        <OptForm.Button onClick={() => setActiveState(true)}>
          Bắt đầu
        </OptForm.Button>
        <OptForm.Break />
      </OptForm>
    </Accordion>
  );
}
