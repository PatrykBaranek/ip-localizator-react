import styled from 'styled-components';
import PatternBackground from '../../assets/pattern-bg.png';

export const HeaderStyles = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20vh;
  padding: 1.7em;
  font-size: 1.6rem;
  background-image: url(${PatternBackground});
  background-size: cover;
`;
