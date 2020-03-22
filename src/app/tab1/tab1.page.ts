import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
//import * as firebase from 'Firebase';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public afDB: AngularFireDatabase/*, public db: AngularFirestore*/)
  {/*
    this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });*/
  }

  ngOnInit() {
    var test = this.afDB.list('User/').query;
    console.log(test);/*
    console.log("haha");
    test.subscribe((result:any) => {
      let profile = result;
      console.log("--------------------------------------");
      console.log(profile);
      console.log("--------------------------------------");
      this.pseudo = profile.pseudo;
    })*//*
    var ref = firebase.database().ref('User/').snapshotChanges()
    var barba = this.afDB;
    console.log(ref);*/
  }

  addPseudo(){
  	this.afDB.list('User/').push({
  		pseudo: this.pseudo
  	});
    console.log("salut");
  }
}
