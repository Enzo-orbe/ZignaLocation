import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";
import {
  listData,
  isFetching,
  isError,
} from "../../redux/reducers/SearchDataReducer";
import "./SearchList.css";

export default function SearchList() {
  const data = useSelector((state) => listData(state));
  const isLoading = useSelector((state) => isFetching(state));
  const error = useSelector((state) => isError(state));
  return data && data.length > 0 ? (
    <Container className="list-container">
      {!isLoading ? (
        <TransitionGroup component="ul">
          {data.map((d) => (
            <CSSTransition
              in={true}
              appear={true}
              timeout={300}
              key={d.id}
              classNames="fade"
            >
              <li className="list">{d.place_name}</li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner animation="border" variant="light" className="loading" />
      )}
    </Container>
  ) : error ? (
    <Container className="default-container">
      <h1>Sorry no results found</h1>
      <h3>Please try again</h3>
    </Container>
  ) : (
    <Container className="default-container">
      <h1>Search a Place</h1>
    </Container>
  );
}
