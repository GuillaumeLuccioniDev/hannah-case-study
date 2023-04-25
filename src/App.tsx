import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
