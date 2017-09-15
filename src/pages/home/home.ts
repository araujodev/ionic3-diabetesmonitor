import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalMedicaoPage } from '../modal-medicao/modal-medicao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openAddMedicao() {
      let modal = this.modalCtrl.create(ModalMedicaoPage);
      modal.present();
  }

}
