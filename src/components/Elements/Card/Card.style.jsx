import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  display: flex;
  width: 350px;
  padding: 8px;
  border: 1px solid gray;
  text-decoration: none;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
`;

export const AyatCardContainer = styled.div``;
