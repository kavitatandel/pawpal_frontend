import DLHeader from "components/Layout/DLHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";
import SearchForm from "components/Forms/SearchForm";

const SearchDog = () => {
  return (
    <>
      <DLHeader />
      <Body>
        <SearchForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default SearchDog;
