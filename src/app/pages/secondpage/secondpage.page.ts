import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';


@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.page.html',
  styleUrls: ['./secondpage.page.scss'],
})
export class SecondpagePage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController,
    ) {
    
  }

  ngOnInit(){

  }

  goToHome() {
    this.router.navigateByUrl('/menu/first')
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
