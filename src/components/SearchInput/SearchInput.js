import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { asyncFetchData } from "../../redux/actions/SearchDataActions";
import "./SearchInput.css";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncFetchData(search));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Control
        type="text"
        value={search}
        name="search"
        placeholder="Search a Place"
        onChange={handleChange}
        maxLength="256"
      />
      <Button
        className="button"
        type="submit"
        disabled={search.trim().length <= 0}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchInput;
