import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
