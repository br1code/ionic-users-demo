import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];
  message: string = 'Update Userssssss';

  constructor(public navCtrl: NavController,
              public userService: UserServiceProvider,
              public loadingCtrl: LoadingController) {
  }

  getUsers() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.userService.getUsers()
    .subscribe(
      (data) => {
        this.users = data['results'];
        loading.dismiss();
      },
      (error) => {
        console.log(error);
        loading.dismiss();
      }
    );
  }
}
