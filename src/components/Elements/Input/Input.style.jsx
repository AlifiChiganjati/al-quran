import styled from "styled-components";

export const Input = styled.input``;

export const SearchInput = styled(Input).attrs({
  placeholder: "Search surah...",
  type: "text",
})`
  width: 100%;
  padding: 8px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 2px var(--dark-color);

  &:focus {
    outline: none;
  }
`;
