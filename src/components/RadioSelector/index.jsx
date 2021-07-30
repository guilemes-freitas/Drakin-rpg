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
      <Race selected={selected}>{children}</Race>
      <ItemBorder selected={selected}></ItemBorder>
    </Container>
  );
};

export default RadioSelector;
