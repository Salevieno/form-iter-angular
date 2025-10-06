import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputLastname } from '../../components/input-lastname/input-lastname';
import { InputName } from '../../components/input-name/input-name';
import { InputPhone } from '../../components/input-phone/input-phone';
import { SelectCountry } from '../../components/select-country/select-country';

@Component({
  selector: 'app-form-simplified',
  imports: [RouterLink, InputName, InputLastname, InputPhone, SelectCountry],
  templateUrl: './form-simplified.html',
  styleUrl: './form-simplified.scss'
})
export class FormSimplified {
  alertSubmission() {
    alert('Form submitted!');
  }
}
