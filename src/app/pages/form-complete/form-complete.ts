import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputLastname } from '../../components/input-lastname/input-lastname';
import { InputName } from '../../components/input-name/input-name';
import { InputPhone } from '../../components/input-phone/input-phone';
import { SelectCountry } from '../../components/select-country/select-country';
import { InputState } from '../../components/input-state/input-state';
import { InputPostalCode } from '../../components/input-postal-code/input-postal-code';
import { InputLanguage } from '../../components/input-language/input-language';

@Component({
  selector: 'app-form-complete',
  imports: [RouterLink, InputName, InputLastname, InputPhone, SelectCountry, InputState, InputPostalCode, InputLanguage],
  templateUrl: './form-complete.html',
  styleUrl: './form-complete.scss'
})
export class FormComplete {
  alertSubmission() {
    alert('Form submitted!');
  }
}
