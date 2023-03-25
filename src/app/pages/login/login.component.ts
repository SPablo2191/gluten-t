import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private _router : Router,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {}
  async authUser(){
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento...',
      duration: 3000,
    });
    loading.present();
    setTimeout(() => {
      this._router.navigate(['chat']);
    }, 3000);
  }
}
