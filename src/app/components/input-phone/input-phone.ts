import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormSharedService } from '../../services/form-shared.service';
import { CommonModule } from '@angular/common';
import { CountryInfo } from '../../shared/data/countries';

@Component({
  selector: 'app-input-phone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-phone.html',
  styleUrl: './input-phone.scss'
})
export class InputPhone {
  prefix: string = '';
  phoneNumber: string = '';
  flag: string = '';
  countrySelected = false;
  subscription?: Subscription;

  constructor(private formShared: FormSharedService) {
      this.subscription = this.formShared.selectedCountry$.subscribe((country: CountryInfo | null) => {
      this.prefix = country ? country.code : '';
      this.flag = country ? this.formShared.getFlagEmoji(country.iso2) : '';
      this.countrySelected = !!country;
    });
  }

  formatPhone(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Permitir apenas números e "+" no início
    value = value.replace(/[^\d+]/g, '');

    // Impedir mais de um "+"
    if (value.indexOf('+') > 0) {
      value = value.replace(/\+/g, '');
    }

    // Pequeno espaçamento visual a cada 4 dígitos (não é uma máscara real)
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    input.value = value;
    this.phoneNumber = value;
  }

  get fullNumber(): string {
    return `${this.prefix} ${this.phoneNumber}`.trim();
  }
}
