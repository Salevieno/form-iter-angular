import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormSharedService } from '../../services/form-shared.service';
import { COUNTRIES, CountryInfo } from '../../shared/data/countries';

@Component({
  selector: 'app-input-language',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-language.html',
  styleUrls: ['./input-language.scss']
})
export class InputLanguage implements OnInit, OnDestroy {
  selectedCountry: CountryInfo | null = null;
  languages: string[] = [];
  selectedLanguage: string = '';
  enabled: boolean = false;
  subscription: Subscription;

  constructor(private formShared: FormSharedService) {
    this.subscription = this.formShared.selectedCountry$.subscribe((country: CountryInfo | null) => {
      this.selectedCountry = country;
      this.updateLanguages();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateLanguages() {
    this.languages = [];
    this.selectedLanguage = '';
    this.enabled = false;
    if (this.selectedCountry) {
      const country = COUNTRIES.find(c => c.iso2.toLowerCase() === this.selectedCountry!.iso2.toLowerCase());
      if (country) {
        this.languages = country.languages;
        this.selectedLanguage = this.languages[0];
        this.enabled = true;
      }
    }
  }

  onChangeLanguage(event: Event) {
    const input = event.target as HTMLSelectElement;
    this.selectedLanguage = input.value;
  }
}
