import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { COUNTRIES, CountryInfo } from '../../shared/data/countries';
import { FormSharedService } from '../../services/form-shared.service';

@Component({
  selector: 'app-input-postal-code',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-postal-code.html',
  styleUrls: ['./input-postal-code.scss']
})
export class InputPostalCode implements OnInit, OnDestroy {
  selectedCountry: CountryInfo | null = null;
  postalCode: string = '';
  placeholder: string = 'Enter postal code';
  enabled: boolean = false;
  subscription: Subscription;

  constructor(private formShared: FormSharedService) {
    this.subscription = this.formShared.selectedCountry$.subscribe((country: CountryInfo | null) => {
      this.selectedCountry = country;
      this.updateField();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateField() {    
    this.placeholder = 'Postal code not required';
    this.enabled = false;
    this.postalCode = '';
    if (this.selectedCountry && this.postalCodePattern) {
      this.placeholder = this.postalCodePattern;
      this.enabled = true;
    }
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    this.postalCode = input.value;
  }

  get postalCodePattern(): string {
    if (!this.selectedCountry) return '';
    const country = COUNTRIES.find(c => c.iso2.toLowerCase() === this.selectedCountry!.iso2.toLowerCase());
    return country?.postalCodePattern || '';
  }

}
