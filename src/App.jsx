import styled from "styled-components";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import DashboardContent from "./Components/DashboardContent/DashboardContent";
import AdditionalContent from "./Components/AdditionalContent/AdditionalContent";

function App() {
  return (
    <>
      <Home>
        <Sidebar />
        <Content>
          <Navbar />
          <H1>Dashboard</H1>
          <Main>
            <DashboardContent />
            <AdditionalContent />
          </Main>
        </Content>
      </Home>
    </>
  );
}

const Home = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Content = styled.div``;

const Main = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const H1 = styled.h1`
  margin-left: 25px;
`;
export default App;
