import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { IPFY } from '../../types/ipfy-types';

const IP_GEOLOCATION_COUNTRY_API = 'https://geo.ipify.org/api/v2/country';

interface IPGeoLocationProps {
  ipAddress: string | undefined;
}

export const useIPGeoLocation = ({ ipAddress }: IPGeoLocationProps) => {
  const [result, setResult] = useState<IPFY | undefined>(undefined);

  const validateIPAdress = (): RegExpMatchArray | null => {
    if (ipAddress === undefined) return null;
    const regexPattern = new RegExp('^(?:[0-9]{1,3}.){3}[0-9]{1,3}$');

    console.log(ipAddress.match(regexPattern));

    return ipAddress.match(regexPattern);
  };

  const fetchIPGeoLocation = async (): Promise<void> => {
    if (ipAddress === undefined) return;

    try {
      const response: AxiosResponse<IPFY> = await axios.get(
        `${IP_GEOLOCATION_COUNTRY_API}?apiKey=${
          import.meta.env.VITE_IPFY_API_KEY
        }&ipAddress=${ipAddress}`
      );

      if (response.status === 200) {
        setResult(response.data);
      } else {
        throw new Error(`API returned status code ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching user data: ${error}`);
      throw error;
    }
  };

  useEffect(() => {
    if (ipAddress === undefined) return;
    fetchIPGeoLocation();
  }, [ipAddress]);

  return { result };
};
