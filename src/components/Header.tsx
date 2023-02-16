import React, { useEffect, useState } from 'react';
import { HeaderStyles } from './styles/Header.styled';

import { Result } from './Result';
import { SearchBar } from './SearchBar';
import { useIPGeoLocation } from './hooks/useIPGeoLocation';
import { ILocation, IPFY } from '../types/ipfy-types';

interface IHeaderProps {
  handleLocalization: (localization: ILocation) => void;
}

export const Header: React.FC<IHeaderProps> = ({ handleLocalization }) => {
  const [ipAddress, setIpAddress] = useState<string | undefined>(undefined);
  const { result } = useIPGeoLocation({ ipAddress: ipAddress });
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSearch = (searchPhrease: string) => {
    setIpAddress(searchPhrease);
  };

  useEffect(() => {
    if (result !== undefined) {
      handleLocalization(result.location);
    }
  }, [result]);

  return (
    <HeaderStyles>
      <h1>IP Address Tracker</h1>
      <SearchBar handleSearch={handleSearch} handleShowResult={setShowResult} />
      {showResult && result && <Result data={result as IPFY} />}
    </HeaderStyles>
  );
};
