import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase el nombre de usuario a la página home
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // animations:[
  //   trigger('enterState', [
  //     state('void', style({
  //       transform: 'translateY(20%)',
  //       opacity: 0
  //     })),
  //     transition(':enter',[
  //       animate(1000,style({
  //         transform: 'translateY(0)',
  //         opacity:1
  //       }))
  //     ])
  //   ])
  // ]
})
export class LoginPage implements OnInit {
  /*
    Se genera el modelo user con dos claves (key), las que se comportan como propiedades de la clase LoginPage.
    En Modelo MVC, la clase "LoginPage" viene siendo el "Controlador", encargado de administrar la parte gráfica
    de la página web de login, por lo que trabaja coordinado con el archivo login.page.html
    Cada propiedad tiene su valor inicial y tiene su pareja de control HTML que es el <ion-input>
    De este modo el TAG:
    <ion-input type="text" [(ngModel)]="login.Usuario"></ion-input>
    ya sabe que tiene que trabajar con el modelo de Angular a través de la propiedad "login.Usuario".
    Fijarse que si se le colocan valores iniciales a login.usuario y login.password, estos aparecerán inmediatamente
    reflejados en la página login cuando esta se abra por primera vez.
  */

  public usuario: Usuario;
  /*
    Para poder trabajar con Router y poder navegar hacia la página "home", debemos primero pasar como
    parámetro e instanciar un objeto de la clase "Router". Fijarse que el tipo de dato, que se pasa en el constructor
    es "Router" con mayúscula, porque se trata de una clase y éstas parten con letra mayúscula,
    mientras que "router" con minúscula es el objeto de esa clase, que usaremos para ejecutar el método "navigate".
  */
  constructor(private router: Router, private toastController: ToastController) {
    this.usuario = new Usuario();
    this.usuario.nombreUsuario = '';
    this.usuario.password = '';
  }


  public ngOnInit(): void {

    /*
      Las siguientes 3 líneas de código sirven para lo siguiente:
        Caso 1: Si las comentas, la página quedará lista para ingresar el nombre de usuario y la password
        Caso 2: Si dejas las instrucciones sin comentar, entonces entrará inmediatamente a la página home,
          usando el usuario por defecto "cgomezvega" con la password "123". Lo anterior es muy útil
          para el caso en que ya quedó lista la página de login y me interesa probar las otras páginas,
          de este modo se saltará el login y no tendrás que estar digitando los datos todo el tiempo.
    */
    // this.usuario.nombreUsuario = 'cgomezvega';
    // this.usuario.password = '123';
    // this.ingresar();
  }

  public ingresar(): void {

    if(!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }


  public validarUsuario(usuario: Usuario): boolean {

    const mensajeError = usuario.validarUsuario();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }
  public recuperarContrasena(): void {
    this.mensajeContrasena('Su contraseña son los 5 primeros números');
  }

  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
  async mensajeContrasena(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 10000
      });
    toast.present();
  }

}
