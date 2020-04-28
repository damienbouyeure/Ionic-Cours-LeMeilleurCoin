import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {OfferComponent} from "./offer/offer.component";
import {PublishComponent} from "./publish/publish.component";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {AppRoutingModule } from "../app-routing.module";



@NgModule({
  declarations: [HomeComponent, OfferComponent, PublishComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppRoutingModule

  ]
})
export class PagesModule { }
