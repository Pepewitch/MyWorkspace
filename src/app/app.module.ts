import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FirebaseModule } from './modules/firebase.module';
import { HomeComponent } from './view/home/home.component';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ShowcaseComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
