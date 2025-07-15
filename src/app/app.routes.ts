import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Coffees } from './components/coffees/coffees';
import { ArtEvents } from './components/art-events/art-events';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'coffees', component: Coffees },
  { path: 'art-events', component: ArtEvents },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
