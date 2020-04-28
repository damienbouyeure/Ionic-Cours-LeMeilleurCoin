import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {OfferComponent} from "./pages/offer/offer.component";
import {PublishComponent} from "./pages/publish/publish.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/Home',
    pathMatch: 'full'
  },
  {
    path: 'pages/Home',
    component: HomeComponent
  },
  {
    path: 'pages/Offer',
    component: OfferComponent
  },
  {
    path: 'pages/Publish',
    component: PublishComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
