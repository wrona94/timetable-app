import { Outlet } from "react-router-dom";
import { Aside } from "./Components/Aside/Aside";
import { Calendar } from "./Components/Calendar/Calendar";
import { Container } from "./Components/Container/Container";
import { Content } from "./Components/Content/Content";
function App() {
  return (
    <>
      <Container>
        <Aside />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
}

export default App;
