import styled from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20vh;
  padding: 1.7em;
  font-size: 1.6rem;
  background-image: url('../images/pattern-bg.png');
  background-size: cover;

  & div {
    display: flex;
    width: 100%;
    padding: 1em;
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    & div {
      width: 50%;
    }
  }
`;
