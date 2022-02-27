import Header from "components/Layout/Header";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";
import SearchForm from "components/Forms/SearchForm";

const SearchDog = () => {
  return (
    <>
      <Header />
      <Body>
        <SearchForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default SearchDog;
