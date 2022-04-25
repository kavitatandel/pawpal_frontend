import MasterHeader from "components/Layout/MasterHeader";
import { Body } from "components/Custom/CustomContainers";
import SearchForm from "components/Forms/SearchForm";

const SearchDog = () => {
  return (
    <>
      <MasterHeader />
      <Body>
        <SearchForm />
      </Body>
    </>
  );
};

export default SearchDog;
