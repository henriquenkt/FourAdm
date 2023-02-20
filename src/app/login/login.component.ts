import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription;
  userLogin: any = {};
  userLogged: any = {};
  isAuthenticated: any;
  result: any;
  botaoSenha: any;
  router: Router;

//   userLogin = new FormGroup({
//     botaoSenha: new FormControl(),
//     email: new FormControl(),
//     password: new FormControl()
// });

  constructor(private loginService: LoginService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  authenticate() {
    this.loginService.$login(this.userLogin)
    .pipe(map(data => {
      var result = data
           this.isAuthenticated = result;
           this.validaUsuario();
          }))
    .subscribe();
  }

  validaUsuario(){
    if (this.isAuthenticated) {
      if (this.isAuthenticated.autorizado == false) {
        sessionStorage.clear();
      } else {
        sessionStorage.setItem('user_logged', this.userLogin.email);
        sessionStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/home']);
      }
    }
  }

  getUserData() {
    this.userLogged = sessionStorage.getItem('user_logged');
    this.isAuthenticated = this.userLogged != null;
  }
}


