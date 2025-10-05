import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormSharedService } from '../../services/form-shared.service';
import { COUNTRIES, CountryInfo } from '../../shared/data/countries';

@Component({
  selector: 'app-select-country',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-country.html',
  styleUrl: './select-country.scss'
})
export class SelectCountry {
  countries = COUNTRIES

  filteredCountries = [...this.countries];
  searchTerm = '';
  selectedCountry: CountryInfo | null = null;
  dropdownOpen = false;

  constructor(protected formShared: FormSharedService) {}

  filterCountries() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCountries = this.countries.filter(c =>
      c.name.toLowerCase().startsWith(term)
    );
  }

  selectCountry(country: CountryInfo) {
    this.selectedCountry = country;
    this.searchTerm = country.name;
    this.dropdownOpen = false;
    this.formShared.updateSelectedCountry(country);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) this.filterCountries();
  }

  closeDropdown() {
    setTimeout(() => {
      this.dropdownOpen = false;
    }, 150);
  }
}
