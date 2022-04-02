import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import SearchContainer from "./components/SearchContainer/SearchContainer";

function App() {
  return (
    <Container fluid>
      <Header />
      <SearchContainer />
    </Container>
  );
}

export default App;
