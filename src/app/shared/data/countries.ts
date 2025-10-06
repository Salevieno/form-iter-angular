export interface CountryInfo {
  name: string;
  code: string;
  iso2: string;
  postalCodePattern: string;
  languages: string[];
}

export const COUNTRIES: CountryInfo[] = [
  { name: 'Bangladesh', code: '+880', iso2: 'bd', postalCodePattern: '#####', languages: ['Bengali'] },
  { name: 'Brazil', code: '+55', iso2: 'br', postalCodePattern: '#####-###', languages: ['Portuguese'] },
  { name: 'China', code: '+86', iso2: 'cn', postalCodePattern: '######', languages: ['Chinese'] },
  { name: 'India', code: '+91', iso2: 'in', postalCodePattern: '######', languages: ['Hindi', 'English'] },
  { name: 'Indonesia', code: '+62', iso2: 'id', postalCodePattern: '#####', languages: ['Indonesian'] },
  { name: 'Mexico', code: '+52', iso2: 'mx', postalCodePattern: '#####', languages: ['Spanish'] },
  { name: 'Nigeria', code: '+234', iso2: 'ng', postalCodePattern: '######', languages: ['English'] },
  { name: 'Pakistan', code: '+92', iso2: 'pk', postalCodePattern: '#####', languages: ['Urdu', 'English'] },
  { name: 'Russia', code: '+7', iso2: 'ru', postalCodePattern: '######', languages: ['Russian'] },
  { name: 'United States', code: '+1', iso2: 'us', postalCodePattern: '#####', languages: ['English'] },
];
