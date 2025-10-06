import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CountryInfo } from '../../shared/data/countries';
import { FormSharedService } from '../../services/form-shared.service';
import { STATES } from '../../shared/data/states';

@Component({
  selector: 'app-input-state',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-state.html',
  styleUrls: ['./input-state.scss']
})
export class InputState implements OnInit, OnDestroy {
  selectedCountry: CountryInfo | null = null;
  states: string[] = [];
  filteredStates: string[] = [];
  stateName: string = '';
  subscription: Subscription;
  dropdownOpen = false;

  constructor(private formShared: FormSharedService) {
    this.subscription = this.formShared.selectedCountry$.subscribe((country: CountryInfo | null) => {
      this.selectedCountry = country;
      this.updateStates();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateStates() {
    this.states = [];
    if (this.selectedCountry && STATES[this.selectedCountry.iso2.toUpperCase()]) {
      this.states = STATES[this.selectedCountry.iso2.toUpperCase()];
    }
    this.filteredStates = [...this.states];
    this.stateName = '';
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  filterStates(query: string) {
    const q = query.toLowerCase();
    this.filteredStates = this.states.filter(state => state.toLowerCase().startsWith(q));
  }

  selectState(state: string) {
    this.stateName = state;
    this.dropdownOpen = false;
  }
}
