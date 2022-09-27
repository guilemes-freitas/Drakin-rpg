import DashboardCard from "../../components/DashboardCard";
import { Container, Content, SectionTitle } from "./styles";
import { NavLink } from "react-router-dom";
import PageBorder from "../../components/PageBorder";

const Dashboard = () => {
  return (
    <Container>
      <PageBorder>
        <Content>
            <SectionTitle>Drakin</SectionTitle>
            <NavLink to="/characters">
              <DashboardCard >Seus personagens</DashboardCard>
            </NavLink>
            <NavLink to="/newCharacter">
              <DashboardCard>Criar novo personagem</DashboardCard>
            </NavLink>
        </Content>
      </PageBorder>
    </Container>
  );
};

export default Dashboard;
