import MasterHeader from "components/Layout/MasterHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";
import SearchForm from "components/Forms/SearchForm";

const SearchDog = () => {
  return (
    <>
      <MasterHeader />
      <Body>
        <SearchForm />
      </Body>
      {/* <CenteredFooter /> */}
    </>
  );
};

export default SearchDog;
