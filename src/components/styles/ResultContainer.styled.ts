import styled from 'styled-components';

export const ResultContainer = styled.ul`
  box-sizing: content-box;
  position: absolute;
  top: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  background-color: #fff;
  list-style: none;

  width: 70%;
  padding: 1.5em;
  border-radius: 0.5em;

  & li {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
    margin-bottom: 1em;

    & h2 {
      height: 50%;
      flex: 1;
      justify-self: flex-start;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      text-align: center;
      font-size: 1.2rem;
      color: var(--very-dark-gray-color);
    }

    & span {
      flex: 1;
      letter-spacing: 0.2em;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 700;
      color: #000;
    }
  }

  @media (min-width: 768px) {
    height: 50%;
    flex-direction: row;
    justify-content: space-around;
    border-right: 1px solid var(--very-dark-gray);

    &:last-child {
      border-right: none;
    }

    & span {
      justify-self: baseline;
      padding: 0.2em;
    }
  }
`;
