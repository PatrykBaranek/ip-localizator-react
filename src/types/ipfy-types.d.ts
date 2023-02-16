export interface IPFY {
  ip: string;
  location: ILocation;
  domains?: string[] | null;
  as: As;
  isp: string;
}
export interface ILocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
export interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}
