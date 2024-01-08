import styled from "styled-components";

export const Text = styled.p``;

export const Logo = styled(Text)`
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  text-shadow: 2px 2px var(--dark-color);
`;

export const SurahTitle = styled(Text)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark-color);
  text-decoration: underline;
`;
