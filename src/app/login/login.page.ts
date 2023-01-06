import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user:string='';

  constructor() { }

  ngOnInit() {
  }

  //evento del nombre de usuario
  public nombrePerson(event:Event){
    const elemento = event.target as HTMLInputElement;
    this.user = elemento.value
  }

}
