import React from 'react';
import { ButtonStyles } from './styles/Button.styled';
import { HeaderStyles } from './styles/Header.styled';
import { SearchInputStyles } from './styles/SearchInput.styled';

import ArrowRightSvg from '../assets/icon-arrow.svg';
import { ResultContainer } from './styles/ResultContainer.styled';

export const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <h1>IP Address Tracker</h1>

      {/* search Input */}

      <div>
        <SearchInputStyles />
        <ButtonStyles>
          <img src={ArrowRightSvg} alt="arrow right" />
        </ButtonStyles>
      </div>

      {/* search result */}

      <ResultContainer>
        <div>
          <h2>IP Address</h2>
        </div>
        <div>
          <h2>Location</h2>
        </div>
        <div>
          <h2>Timezone</h2>
        </div>
        <div>
          <h2>ISP</h2>
        </div>
      </ResultContainer>
    </HeaderStyles>
  );
};
