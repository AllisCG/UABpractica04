import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [

  {path:'', component:HeroesComponent},
  {path:'home', component:HomeComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'heroe/:id', component: HeroeComponent},
  {path:'about', component: AboutComponent},
  {path:'buscar/:textoFinal', component: BuscarComponent},
  {path:'**', component:HeroesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
