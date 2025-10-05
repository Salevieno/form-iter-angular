import { Component } from '@angular/core';
import { InputName } from '../../components/input-name/input-name';
import { InputLastname } from '../../components/input-lastname/input-lastname';
import { InputPhone } from '../../components/input-phone/input-phone';
import { SelectCountry } from '../../components/select-country/select-country';
import { RouterLink } from '@angular/router';

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
