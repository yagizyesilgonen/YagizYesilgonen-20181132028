import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { KayitsilComponent } from './components/kayitsil/kayitsil.component';
import { KayitduzenleComponent } from './components/kayitduzenle/kayitduzenle.component';
import { KayitdetayComponent } from './components/kayitdetay/kayitdetay.component';
import { KayitekleComponent } from './components/kayitekle/kayitekle.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AnakartComponent } from './components/anakart/anakart.component';
import { IslemciComponent } from './components/islemci/islemci.component';
import { EkrankartiComponent } from './components/ekrankarti/ekrankarti.component';

const redirectLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [

  {
    path: 'anakart',
    component: AnakartComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    },
  }, {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    },
  }, {
    path: 'islemci',
    component: IslemciComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    },
  }, {
    path: 'ekrankarti',
    component: EkrankartiComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  }, {
    path: 'kayitlar',
    component: KayitlarComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'kayitekle',
    component: KayitekleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'kayitdetay/:key',
    component: KayitdetayComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'kayitduzenle/:key',
    component: KayitduzenleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  }, {
    path: 'kayitsil/:key',
    component: KayitsilComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
