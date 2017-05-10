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

  galeria: any = ["http://img.cinemablend.com/cb/d/3/1/d/6/9/d31d696881fbf9fe0e9800a6af80de6d2de696babcfa2790f5b8d585da18d0af.jpg"];
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
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      let post = {
        ID: 'GOKU',
        URL: base64Image
      };
      this.instagramProvider.postFoto(post).subscribe(q => this.timeline = q, err => alert("Erro ao gravar post"));
    }, (err) => {
      // Handle error
    });
  }
}
