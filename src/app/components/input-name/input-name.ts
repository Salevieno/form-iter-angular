import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-name.html',
  styleUrl: './input-name.scss'
})
export class InputName {
  value = '';
}
