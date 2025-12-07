import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Person } from '../person';
import { PersonLs } from '../person-ls';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  personId?: number;
  person?: Person | null;

  constructor(
    private route: ActivatedRoute,
    private personLsService: PersonLs
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.personId = Number(params['id']);
      this.person = this.personLsService.getPerson(this.personId);
    });
  }
}
