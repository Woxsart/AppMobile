import { Component, OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireModuleModule} from 'angularfire2/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Environment } from '../environments/environment';

import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

//import * as firebase from 'Firebase';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
/*
constructor(public db: AngularFireDatabase) { }

  async ngOnInit() {/*
    (await this.GetCurrentUser())
    .subscribe((result:any) => {
      let profile = result.payload.data();
      this.CurrentUser = profile;
      this.pseudo = profile.pseudo;
    })
    /*var test = db.collection('user');
    console.log(test);
    var test = this.firebase.collection('/user').snapshotChanges();
    console.log(test);
  }

  async GetCurrentUser(){
    return await this.firebase.doc('/user/').snapshotChanges()
  };
  */
  user: User[];

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.characterService.getUser()
    .subscribe(result => {
      this.user = result.map(r => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User;
      });
    })
  }



}
