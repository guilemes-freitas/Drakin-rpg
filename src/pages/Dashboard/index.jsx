import DashboardCard from "../../components/DashboardCard";
import { Container } from "./styles";
import { NavLink } from "react-router-dom";
import PageBorder from "../../components/PageBorder";

const Dashboard = () => {
  return (
    <Container>
      <PageBorder background></PageBorder>
      <NavLink to="/characters">
        <DashboardCard >Seus personagens</DashboardCard>
      </NavLink>
      <NavLink to="/newCharacter">
        <DashboardCard>Criar novo personagem</DashboardCard>
      </NavLink>
      <DashboardCard >Regras</DashboardCard>
    </Container>
  );
};

export default Dashboard;
