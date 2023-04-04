import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _router: Router,
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  async authUser() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento...',
      duration: 3000,
    });
    loading.present();
    this.authService.GoogleAuth();
  }
}
