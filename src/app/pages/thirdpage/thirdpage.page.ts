import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.page.html',
  styleUrls: ['./thirdpage.page.scss'],
})
export class ThirdpagePage implements OnInit {

  image = ['avatar1', 'avatar2', 'avatar3'];

  constructor(
    private router: Router,
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

  goToFourth() {
    this.router.navigateByUrl('/menu/fourth')
  }
}
