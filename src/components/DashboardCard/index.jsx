import { Container,Text } from "./styles";

const DashboardCard = ({children, image}) => {

  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default DashboardCard;