import { Injectable } from '@angular/core';
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonLs {
  readonly KEY = 'people';
  constructor() { }

  public getAll(): Person[] {
    const storedData = localStorage.getItem(this.KEY);

    if (storedData)
    {
      return JSON.parse(storedData);
    }
    return [];

  }

  public getPerson(index: number): Person
  {
    const people = this.getAll();

    return people[index] || null;

  }

  public addPerson(person: Person): void
  {
    // get all people
    // push person to the array of people
    // update localstorage with the array contents serialized using JSON.stringify()
    const people = this.getAll();
    people.push(person);
    localStorage.setItem(this.KEY, JSON.stringify(people));

  }

  public deletePerson(index: number): void {
    const people = this.getAll();
    people.splice(index, 1);

    localStorage.setItem(this.KEY, JSON.stringify(people));
  }
}
