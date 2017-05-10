import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstagramProvider } from '../../providers/instagram/instagram';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage({
  name: 'instagram'
})
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class InstagramPage {

  galeria: any = [];
  timeline: any = [];
  aba: string = '1';
  constructor(public navCtrl: NavController, public navParams: NavParams, private instagramProvider: InstagramProvider, private camera: Camera) {
  }

  toggle() {
    this.timeline = [];
    this.galeria = [];
  }

  doRefresh(refresher) {
    this.instagramProvider.getFotos().subscribe(q => {
      this.timeline = q
      refresher.complete();
    }, err => alert("Erro ao ler posts"));
  }

  ionViewDidLoad() {
    this.instagramProvider.getFotos().subscribe(q => this.timeline = q, err => alert("Erro ao ler posts"));
  }

  changeAba(aba: string) {
    this.aba = aba;
  }

  cameraOpen() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.galeria.push(base64Image);

      let post = {
        ID: 'GOKU',
        URL: base64Image,
        DESCRICAO: "Foto irada!"
      };
      this.instagramProvider.postFoto(post).subscribe(q => this.ionViewDidLoad(), err => alert("Erro ao gravar post"));
    }, (err) => {
      // Handle error
    });
  }
}
