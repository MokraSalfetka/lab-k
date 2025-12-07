import { Routes } from '@angular/router';
import {NotFound} from './not-found/not-found';
import {Details} from './details/details';
import {List} from './list/list';
import {AddPerson} from './add-person/add-person';
import { FormsModule } from '@angular/forms';
//dawawd

export const routes: Routes = [
  {path: "list", component: List},
  {path: "details/:id", component: Details},
  {path: "add", component: AddPerson},
  {path: "", redirectTo: "/list", pathMatch: "full"},
  {path: "**", component: NotFound},

];
