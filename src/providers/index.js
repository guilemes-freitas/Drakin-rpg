import { CharacterProvider } from "./characters";

const Providers = ({ children }) => {
  return (
      <CharacterProvider>{children}</CharacterProvider>
  );
};

export default Providers;