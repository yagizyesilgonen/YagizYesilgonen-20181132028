import { Kayit } from './../../models/kayit';
import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bayi } from 'src/app/models/bayi';
import { Sonuc } from './../../models/sonu2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bayiler;
  secBayi: Bayi=new Bayi();
  sonu2: Sonuc=new Sonuc(); 
  ekleduzenle: boolean=false;
  detay: boolean=false;
  silme: boolean=false;
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];
  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.KayitListele();
    this.BayiListele();
  }
  Kaydet() {
    if (this.secBayi.key2 == null) {
      this.secBayi.islem1 = false;
      this.fbServis.BayiEkle(this.secBayi).then(d => {
        this.sonu2.islem1 = true;
        this.sonu2.mesaj1 = "Bayi Eklendi";
      })
    } else {
      this.fbServis.BayiDuzenle(this.secBayi).then(d => {
        this.sonu2.islem1 = true;
        this.sonu2.mesaj1 = "Bayi Güncellendi";
      });

    }
  }
  BayiSec(k:Bayi){
    Object.assign(this.secBayi,k);
  }
  
  
  BayiListele() {
    this.fbServis.BayiListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key2: c.payload.key, ...c.payload.val() })

        )
      )
    ).subscribe(data => {
      this.bayiler = data;
    })
  }
  TamamlaIptal(k: Bayi, islem: boolean) {

    k.islem1 = islem;
    this.fbServis.BayiDuzenle(k).then(d => {
      this.sonu2.islem1 = true;
      this.sonu2.mesaj1 = "Bayi Güncellendi";
    });

  }

  
  Sil() {

    this.fbServis.BayiSil(this.secBayi.key2).then(d => {
      this.sonu2.islem1 = true;
      this.sonu2.mesaj1 = "Bayi Silindi";
      this.silme = false;
    });
  }
  
  OturumKapat() {
    this.fbServis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });

  }
  KayitListele() {
    this.fbServis.KayitListeleByUID(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as Kayit);
      });
    });
  }
}

