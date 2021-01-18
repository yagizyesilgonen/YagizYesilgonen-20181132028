import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { KayitsilComponent } from './components/kayitsil/kayitsil.component';
import { KayitduzenleComponent } from './components/kayitduzenle/kayitduzenle.component';
import { KayitdetayComponent } from './components/kayitdetay/kayitdetay.component';
import { KayitekleComponent } from './components/kayitekle/kayitekle.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { HomeComponent } from './components/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CKEditorModule } from 'ng2-ckeditor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnakartComponent } from './components/anakart/anakart.component';
import { IslemciComponent } from './components/islemci/islemci.component';
import { EkrankartiComponent } from './components/ekrankarti/ekrankarti.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    KayitekleComponent,
    KayitdetayComponent,
    KayitduzenleComponent,
    KayitsilComponent,
    KayitlarComponent,
    NavbarComponent,
    AnakartComponent,
    IslemciComponent,
    EkrankartiComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
