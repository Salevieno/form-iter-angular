import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-lastname',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-lastname.html',
  styleUrl: './input-lastname.scss'
})
export class InputLastname {
  value: string = '';
}
