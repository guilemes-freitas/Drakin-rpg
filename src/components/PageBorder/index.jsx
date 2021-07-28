import { Container } from "./styles";

const PageBorder = ({children, background=false}) => {
  return (
    <Container background={background}>
      {children}
    </Container>
  );
};

export default PageBorder;
