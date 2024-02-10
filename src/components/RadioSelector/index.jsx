import { Container, Race, ItemBorder, RadioButton } from "./styles";

const RadioSelector = ({ name, value, selected, children, options, ...rest }) => {
  return (
    <Container ref={(el) => options.current.push(el)}  className={selected && "option--selected"} >
      <RadioButton
        type="radio"
        name={name}
        value={value}
        checked={selected}
        {...rest}
      />
      <ItemBorder selected={selected}></ItemBorder>
      <Race selected={selected}>{children}</Race>
    </Container>
  );
};

export default RadioSelector;
