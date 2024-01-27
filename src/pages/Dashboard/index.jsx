import DashboardCard from "../../components/DashboardCard";
import { Container, SectionTitle } from "./styles";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container>
            <SectionTitle>Drakin</SectionTitle>
            <NavLink to="/characters">
              <DashboardCard >Seus personagens</DashboardCard>
            </NavLink>
            <NavLink to="/newCharacter">
              <DashboardCard>Criar novo personagem</DashboardCard>
            </NavLink>
            <NavLink to="/rules">
              <DashboardCard>Regras</DashboardCard>
            </NavLink>
    </Container>
  );
};

export default Dashboard;
