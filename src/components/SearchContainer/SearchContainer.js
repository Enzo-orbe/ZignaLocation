import { Container } from "react-bootstrap";
import SearchInput from "../SearchInput/SearchInput";
import SearchList from "../SearchList/SearchList";
import "./SearchContainer.css";

const SearchContainer = () => {
  return (
    <Container className="search-container">
      <SearchInput />
      <SearchList />
    </Container>
  );
};

export default SearchContainer;
