import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Hero } from 'src/app/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-show-hero',
  templateUrl: './show-hero.component.html',
})
export class ShowHeroComponent implements OnInit {
  public hero$: Observable<Hero>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.hero$ = this.activatedRoute.params.pipe(
      map((params) => params?.heroName),
      filter((heroName) => !!heroName),
      switchMap((heroName) => this.heroService.getByKey(heroName))
    );
  }
}
