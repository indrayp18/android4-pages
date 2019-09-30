import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-fourthpage',
  templateUrl: './fourthpage.page.html',
  styleUrls: ['./fourthpage.page.scss'],
})
export class FourthpagePage implements OnInit {

  img: any;
  
  constructor(
    private modalController: ModalController) { }

  ngOnInit() {
  }

  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => modal.present());
  }

}
