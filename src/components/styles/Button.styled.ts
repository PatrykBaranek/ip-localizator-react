import styled from 'styled-components';

export const ButtonStyles = styled.button`
  height: inherit;
  padding: inherit;
  background-color: #000000;
  color: #fff;
  width: 60px;

  border-top-right-radius: 0.6em;
  border-bottom-right-radius: 0.6em;

  border: none;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;
