import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { $ } from 'protractor';
import { Usuario } from 'src/app/model/Usuario';
import { NivelEducacional } from '../../model/NivelEducacional';
import { Persona } from '../../model/Persona';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations:[
    trigger('enterState', [
      state('void', style({
        transform: 'translateY(80%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(1000,style({
          transform: 'translateY(0)',
          opacity:1
        }))
      ])
    ])
  ]
})

export class HomePage implements OnInit {

  public usuario: Usuario;

  public nivelesEducacionales: NivelEducacional[] = [
    {id: 1, nombre: 'Básica Incompleta'},
    {id: 2, nombre: 'Básica Completa'},
    {id: 3, nombre: 'Media Incompleta'},
    {id: 4, nombre: 'Media Completa'},
    {id: 5, nombre: 'Superior Incompleta'},
    {id: 6, nombre: 'Superior Completa'}
  ];

  public persona: Persona = new Persona();

   constructor(
        private activeroute: ActivatedRoute
      , private router: Router
      , private alertController: AlertController) {


    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {

        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

      } else {

        this.router.navigate(['/login']);
      }
  });
}

public ngOnInit() {
  // this.persona.nombre = 'Cristián';
  // this.persona.apellido = 'Gómez';
  // this.persona.nivelEducacional.id = 6;
  // this.persona.fechaNacimiento = '1972-12-26';
}

  public entrarScanner(): void {

    this.router.navigate(['/qrreader']);
  }

  public async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
