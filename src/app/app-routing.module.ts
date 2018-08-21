import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'Katvoz', loadChildren: './katvoz/katvoz.module#KatvozPageModule' },
  { path: 'About', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'Settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
