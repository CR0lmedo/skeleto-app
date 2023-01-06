import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public usuario: string = '';
  public nombre: string = '';
  public apellido: string = '';


  constructor(
    private alertController: AlertController,
    private activa: ActivatedRoute
    ) {}
  async Alerta() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: 'Su nombre es ' + this.nombre +' '+ this.apellido,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ionViewWillEnter(){
    this.activa.queryParams.subscribe(parametros => {
      this.usuario = parametros['0'] || 'no se registro usuario'
    })
  }

  public obtenerNom(evento: Event) {
    const elemento = evento.target as HTMLInputElement;
    this.nombre = elemento.value
  }

  public obtenerApe(evento: Event) {
    const elemento = evento.target as HTMLInputElement;
    this.apellido = elemento.value
  }



}