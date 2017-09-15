import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-medicao',
  templateUrl: 'modal-medicao.html',
})
export class ModalMedicaoPage {

    dataAtual: String = new Date().toISOString();

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  
    }
    
    dismiss() {
      this.viewCtrl.dismiss();
    }

}
