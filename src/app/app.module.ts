import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FirebaseModule } from './modules/firebase.module';
import { HomeComponent } from './views/home/home.component';
import { ShowcaseComponent } from './views/showcase/showcase.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NavigationMainContentComponent } from './components/navigation-bar/navigation-main-content/navigation-main-content.component';
import { NavigationHeaderContentComponent } from './components/navigation-bar/navigation-header-content/navigation-header-content.component';
import { NavigationSidenavContentComponent } from './components/navigation-bar/navigation-sidenav-content/navigation-sidenav-content.component';
import { EmbeddedLabComponent } from './views/embedded-lab/embedded-lab.component';
import { NavigationSidenavItemComponent } from './components/navigation-bar/navigation-sidenav-item/navigation-sidenav-item.component';
import { AddEmbeddedLabDialogComponent } from './views/embedded-lab/add-embedded-lab-dialog/add-embedded-lab-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeleteEmbeddedLabDialogComponent } from './views/embedded-lab/delete-embedded-lab-dialog/delete-embedded-lab-dialog.component';
import { EmbeddedLabTransactionDialogComponent } from './views/embedded-lab/embedded-lab-transaction-dialog/embedded-lab-transaction-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowcaseComponent,
    HeaderComponent,
    NavigationBarComponent,
    NavigationMainContentComponent,
    NavigationHeaderContentComponent,
    NavigationSidenavContentComponent,
    EmbeddedLabComponent,
    NavigationSidenavItemComponent,
    AddEmbeddedLabDialogComponent,
    DeleteEmbeddedLabDialogComponent,
    EmbeddedLabTransactionDialogComponent,
  ],
  entryComponents: [
    AddEmbeddedLabDialogComponent,
    DeleteEmbeddedLabDialogComponent,
    EmbeddedLabTransactionDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
