import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  async createAccount() {
    await this.afAuth.auth.createUserWithEmailAndPassword(
      this.email,
      this.password
    );
    this.router.navigate(['/tabs']);
  }

  async login() {
    await this.afAuth.auth.signInWithEmailAndPassword(
      this.email,
      this.password
    );
    this.router.navigate(['/tabs']);
  }
}
