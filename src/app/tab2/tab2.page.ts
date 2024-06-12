import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid, IonRow, IonCol, IonImg, ActionSheetController
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {PhotoService, UserPhoto} from "../services/photo.service";
import {NgForOf} from "@angular/common";



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, NgForOf]
})
export class Tab2Page implements OnInit {

  constructor(public photoService: PhotoService,
              public actionSheetController: ActionSheetController) {}

  addPhotoToGallery(){
    this.photoService.addNewToGallery().then(r => console.log("Photo added"));
  }

  async ngOnInit(){
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }
}
