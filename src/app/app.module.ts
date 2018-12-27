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
import { EmbeddedLabComponent } from './views/embedded-lab/embedded-lab.component';
import { NavigationSidenavItemComponent } from './components/navigation-bar/navigation-sidenav-item/navigation-sidenav-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddEmbeddedLabDialogComponent } from './components/add-embedded-lab-dialog/add-embedded-lab-dialog.component';
import { DeleteEmbeddedLabDialogComponent } from './components/delete-embedded-lab-dialog/delete-embedded-lab-dialog.component';
import { EmbeddedLabTransactionDialogComponent } from './components/embedded-lab-transaction-dialog/embedded-lab-transaction-dialog.component';
import { EmbeddedLabSettingDialogComponent } from './components/embedded-lab-setting-dialog/embedded-lab-setting-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowcaseComponent,
    HeaderComponent,
    NavigationBarComponent,
    EmbeddedLabComponent,
    NavigationSidenavItemComponent,
    AddEmbeddedLabDialogComponent,
    DeleteEmbeddedLabDialogComponent,
    EmbeddedLabTransactionDialogComponent,
    EmbeddedLabSettingDialogComponent,
  ],
  entryComponents: [
    AddEmbeddedLabDialogComponent,
    DeleteEmbeddedLabDialogComponent,
    EmbeddedLabTransactionDialogComponent,
    EmbeddedLabSettingDialogComponent,
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
