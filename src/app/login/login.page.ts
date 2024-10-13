import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserCredential } from 'firebase/auth'; // Importar UserCredential
import { NavController } from '@ionic/angular'; // Se você estiver usando NavController para navegação

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Inicializa como string vazia
  password: string = ''; // Inicializa como string vazia
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  showPassword: boolean = false; // Adiciona a propriedade showPassword

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  // Função para login
  login() {
    this.emailInvalid = false;
    this.passwordInvalid = false;

    if (!this.validateEmail(this.email)) {
      this.emailInvalid = true;
    }

    if (!this.validatePassword(this.password)) {
      this.passwordInvalid = true;
    }

    if (this.emailInvalid || this.passwordInvalid) {
      return;
    }

    this.authService.login(this.email, this.password)
      .then((response: UserCredential) => {
        console.log('Login bem-sucedido', response);
        this.navCtrl.navigateRoot('/tabs'); // Navegação após login bem-sucedido
      })
      .catch((error) => {
        console.error('Erro ao fazer login', error);
      });
  }

  // Método para login com Google
  async loginWithGoogle() {
    try {
      const user = await this.authService.loginWithGoogle();
      console.log('Login com Google bem-sucedido', user);
      this.navCtrl.navigateRoot('/tabs'); // Navegação após login bem-sucedido
    } catch (error) {
      console.error('Erro ao fazer login com Google', error);
    }
  }

  // Funções de validação
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 6;
  }
}
