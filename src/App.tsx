import { useState } from 'react';
import { Header } from './components/Header';
import { Map } from './components/Map';
import { GlobalStyles } from './components/styles/Global';
import { ILocation } from './types/ipfy-types';

const App: React.FC = () => {
  const [localization, setLocalization] = useState<ILocation | undefined>(undefined);

  const handleLocalization = (localization: ILocation) => {
    setLocalization(localization);
  };

  return (
    <>
      <GlobalStyles />
      <Header handleLocalization={handleLocalization} />
      <Map localization={localization} />
    </>
  );
};

export default App;
