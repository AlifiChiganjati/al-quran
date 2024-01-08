import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 10;
  background-color: var(--primary-color);
  color: var(--white-color);
  position: fixed;
  width: 100%;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 4px;
`;
