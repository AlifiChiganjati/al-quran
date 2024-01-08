import styled from "styled-components";

export const Button = styled.button``;

export const SearchButton = styled(Button)`
  padding: 8px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  box-shadow: 0 2px 2px var(--dark-color);
  cursor: pointer;
  background-color: var(--white-color);
  color: var(--dark-color);
  opacity: 0.7;
  font-weight: 600;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
