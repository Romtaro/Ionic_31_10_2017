import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: any = {nom: String,version: Number, complement: String};

  constructor(public navCtrl: NavController) {
    this.app.nom = "Projet_31.10.2017";
    this.app.version = 1;
    this.app.complement = "Montgrandi";
  }

  rename() {
    this.app.nom = "Changement réussi";
  }

  increment() {
    this.app.version+=1;
  }

}

/*
  class App {
    constructor(nom:String, version:Number) {
      nom: String;
      version: Number;

    }

}
*/
