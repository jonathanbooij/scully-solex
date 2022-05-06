import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ShowHeroComponent } from './show-hero/show-hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: ':heroName',
    component: ShowHeroComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, HeroesComponent],
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HeroDetailComponent,
    ShowHeroComponent,
  ],
})
export class HeroesModule {}
