import { IPFY } from '../types/ipfy-types';
import { ResultContainer } from './styles/ResultContainer.styled';

interface IResultProps {
  data: IPFY;
}

export const Result: React.FC<IResultProps> = ({ data }) => {
  return (
    <ResultContainer>
      <li>
        <h2>IP Address</h2>
        <span>{data.ip}</span>
      </li>
      <li>
        <h2>Location</h2>
        <span>{data.location.region}</span>
      </li>
      <li>
        <h2>Timezone</h2>
        <span>UTC {data.location.timezone}</span>
      </li>
      <li>
        <h2>ISP</h2>
        <span>{data.isp}</span>
      </li>
    </ResultContainer>
  );
};
