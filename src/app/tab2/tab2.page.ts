import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid, IonRow, IonCol, IonImg
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {PhotoService} from "../services/photo.service";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, NgForOf]
})
export class Tab2Page implements OnInit {

  constructor(public photoService: PhotoService) {}

  addPhotoToGallery(){
    this.photoService.addNewToGallery().then(r => console.log("Photo added"));
  }

  async ngOnInit(){
    await this.photoService.loadSaved();
  }

}
