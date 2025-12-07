import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../person';
import { PersonLs } from '../person-ls';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  imports: [
    FormsModule
  ],
  templateUrl: './add-person.html',
  styleUrls: ['./add-person.css']
})
export class AddPerson implements OnInit {

  person: Person = {
    address: {}
  };

  constructor(
    private personLsService: PersonLs,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    this.personLsService.addPerson(this.person);
    this.router.navigate(['/list']);
  }
}
