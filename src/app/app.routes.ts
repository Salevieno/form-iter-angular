import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { FormComplete } from './pages/form-complete/form-complete';
import { FormSimplified } from './pages/form-simplified/form-simplified';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'form-simplified', component: FormSimplified },
    { path: 'form-complete', component: FormComplete },
    { path: '**', redirectTo: '' }
];
