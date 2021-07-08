export interface ICountry {
  alpha3Code: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flag: string;
  topLevelDomain: string;
  currencies: ICurrency[];
  languages: ILanguage[];
  borders: string[];
}

interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
