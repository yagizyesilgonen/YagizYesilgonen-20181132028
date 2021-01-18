import { Uye } from './../models/uye';
import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'
import { Bayi } from '../models/bayi';

@Injectable({
  providedIn: 'root'
})
export class FbservisService {
  private dbKayit = '/kayitlar';
  private dbBayi = '/bayiler';
  private dbUye = '/Uyeler';
  kayitRef: AngularFireList<Kayit> = null;
  bayiRef: AngularFireList<Bayi> = null;
  uyeRef: AngularFireList<Uye> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit);
    this.bayiRef = db.list(this.dbBayi);
    this.uyeRef = db.list(this.dbUye);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  KayitListele() {
    return this.kayitRef;
  }
  BayiListele() {
    return this.bayiRef;
  }
  KayitListeleByUID(uid: string) {
    return this.db.list("/Kayitlar", q => q.orderByChild("uid").equalTo(uid));
  }
  KayitByKey(key: string) {
    return this.db.object("/Kayitlar/" + key);
  }
  KayitEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit);
  }
  BayiEkle(bayi: Bayi) {
    return this.bayiRef.push(bayi);
  }
  KayitDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit);
  }
  BayiDuzenle(bayi: Bayi) {
    return this.bayiRef.update(bayi.key2, bayi);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }
  BayiSil(key2: string) {
    return this.bayiRef.remove(key2);
  }
}
