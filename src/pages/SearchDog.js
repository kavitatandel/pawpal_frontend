import MasterHeader from "components/Layout/MasterHeader";
import { Body } from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";
import SearchForm from "components/Forms/SearchForm";
import SearchFormTest from "components/Forms/SearchFormTest";
import React, { Suspense } from "react";

//const SearchForm = React.lazy(() => import("components/Forms/SearchForm"));

const SearchDog = () => {
  return (
    <>
      <MasterHeader />
      <Body>
        {/* <Suspense
          fallback={
            <div
              style={{
                backgroundColor: "blue",
                width: "1000px",
                height: "1000px",
              }}
            >
              LOADING....
            </div>
          }
        > */}
        <SearchFormTest />
        {/* <SearchForm /> */}
        {/* </Suspense> */}
      </Body>
      {/* <CenteredFooter /> */}
    </>
  );
};

export default SearchDog;
