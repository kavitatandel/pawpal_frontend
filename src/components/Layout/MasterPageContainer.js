import React from "react";
import "../../styles/layout.css";
import CenteredFooter from "./CenteredFooter";
import Header from "./Header";
import PageContainerNoBGD from "./PageContainerNoBGD";

const MasterPageContainer = (props) => {
  return (
    <div class="mainContainer">
      <div class="header">
        <Header />
      </div>
      <div class="content">
        {props.children}
        {/* <PageContainerNoBGD /> */}
        <CenteredFooter />
      </div>
      {/* <div class="footer"></div> */}
    </div>
  );
};

export default MasterPageContainer;
