import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";
import { listData, isFetching } from "../../redux/reducers/SearchDataReducer";
import "./SearchList.css";

export default function SearchList() {
  const data = useSelector((state) => listData(state));
  const isLoading = useSelector((state) => isFetching(state));

  return data && data.length > 0 ? (
    <Container className="list-container">
      {!isLoading ? (
        <TransitionGroup component="ul">
          {data.map((d) => (
            <CSSTransition in={data.length > 0} key={d.id} timeout={1000}>
              <li> {d.place_name} </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner animation="border" variant="dark" className="loading" />
      )}
    </Container>
  ) : (
    <Container className="default-container">
      <h1>Search a Place</h1>
    </Container>
  );
}
