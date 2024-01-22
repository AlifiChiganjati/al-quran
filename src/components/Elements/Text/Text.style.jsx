import styled from "styled-components";

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`;

export const Logo = styled(Text)`
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  text-shadow: 2px 2px var(--dark-color);
`;

export const Title = styled(Text)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark-color);
  text-decoration: underline;
`;

export const SurahNomor = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-color);
  position: absolute;
  top: 50%;
  left: 28px;
  transform: translate(-50%, -50%);
`;

export const SurahTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-color);
`;

export const SurahTitleArab = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-color);
  font-family: var(--amiri-quran);
`;

export const SurahText = styled(Text)`
  font-size: 12px;
  color: var(--dark-color);
  opacity: 0.8;
`;

export const ArabText = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  text-align: right;
  color: var(--dark-color);
  font-family: var(--amiri-quran);
`;
