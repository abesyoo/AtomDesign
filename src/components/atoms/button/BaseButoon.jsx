import styled from "styled-components";

export const BaseButton = styled.button`
  display: inline-block;
  width: 300px;
  max-width: 100%;
  padding: 20px 10px;
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: #fff;
  font-size: 1.125rem;
  text-align: center;
  text-decoration: none;
  transition: 0.25s;
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #e25c00;
    opacity: 0.8;
  }
`;
