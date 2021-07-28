import { Container, Race, ItemBorder, RadioButton } from "./styles";

const RadioSelector = ({ name, value, selected, children, races, ...rest }) => {
  return (
    <Container ref={(el) => races.current.push(el)}  className={selected && "race--selected"} >
      <RadioButton
        type="radio"
        name={name}
        value={value}
        checked={selected}
        {...rest}
      />
      <Race selected={selected}>{children}</Race>
      <ItemBorder selected={selected}></ItemBorder>
    </Container>
  );
};

export default RadioSelector;
