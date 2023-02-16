import { Header } from './components/Header';
import { Map } from './components/Map';
import { GlobalStyles } from './components/styles/Global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Map />
    </>
  );
};

export default App;
