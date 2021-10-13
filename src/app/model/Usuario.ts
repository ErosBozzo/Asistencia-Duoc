export class Usuario {
  public nombreUsuario = '';
  public password = '';



  public validarNombreUsuario(): string {
    if (this.nombreUsuario.trim() === '') {
      return 'Para ingresar al sistema debe ingresar un nombre de usuario.';
    }
    if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    if (this.nombreUsuario !== 'Cristian') {
        return 'Usuario incorrecto.';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña.';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if(this.password !== '12345') {
      return 'Contraseña incorrecta';
    }
    if (this.password.length === 4) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    return '';
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }
}
