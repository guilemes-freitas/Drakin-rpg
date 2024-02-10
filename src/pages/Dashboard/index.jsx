import DashboardCard from "../../components/DashboardCard";
import { Section, SectionTitle, ContentWrapper, InfoButton } from "./styles";
import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Section>
      <SectionTitle>Drakin</SectionTitle>
      <ContentWrapper>
        <NavLink to="/newCharacter">
          <DashboardCard>Criar personagem</DashboardCard>
        </NavLink>
        <NavLink to="/characters">
          <DashboardCard>Meus personagens</DashboardCard>
        </NavLink>
      </ContentWrapper>
      <NavLink to="/rules">
        <InfoButton>
          <FaBook/>
          <span>Regras</span>
        </InfoButton>
      </NavLink>
    </Section>
  );
};

export default Dashboard;
