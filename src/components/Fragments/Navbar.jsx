import { SearchButton } from "../Elements/Button";
import { SearchInput } from "../Elements/Input";
import { Logo } from "../Elements/Text";
import { Header, SearchForm } from "./Navbar.style";

const Navbar = () => {
  return (
    <Header>
      <Logo as="h1">Al-Qur'an</Logo>
      <SearchForm>
        <SearchInput />
        <SearchButton>Search</SearchButton>
      </SearchForm>
    </Header>
  );
};

export default Navbar;
