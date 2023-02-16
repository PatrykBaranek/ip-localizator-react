import React, { useEffect, useState } from 'react';
import { HeaderStyles } from './styles/Header.styled';

import { Result } from './Result';
import { SearchBar } from './SearchBar';
import { useIPGeoLocation } from './hooks/useIPGeoLocation';
import { IPFY } from '../types/ipfy-types';

export const Header: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string | undefined>(undefined);
  const { result } = useIPGeoLocation({ ipAddress: ipAddress });
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSearch = (searchPhrease: string) => {
    setIpAddress(searchPhrease);
  };

  return (
    <HeaderStyles>
      <h1>IP Address Tracker</h1>
      <SearchBar handleSearch={handleSearch} handleShowResult={setShowResult} />
      {showResult && result && <Result data={result as IPFY} />}
    </HeaderStyles>
  );
};
