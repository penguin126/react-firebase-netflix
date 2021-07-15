import React from "react";
import { JumbotronContaier } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
import { FaqsContainer } from "./containers/faqs";

export default function App() {
  return (
    <>
      <JumbotronContaier />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
