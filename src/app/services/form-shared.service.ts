import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CountryInfo } from '../shared/data/countries';

@Injectable({
  providedIn: 'root'
})
export class FormSharedService {
  private selectedCountrySubject = new BehaviorSubject<CountryInfo | null>(null);
  selectedCountry$ = this.selectedCountrySubject.asObservable();

  updateSelectedCountry(country: CountryInfo) {
    this.selectedCountrySubject.next(country);
  }
  
  getFlagEmoji(iso2: string): string {
    if (!iso2 || iso2.length !== 2) return '';
    const codePoints = iso2.toUpperCase().split('').map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }
}
