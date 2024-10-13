import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  profilePicture: string | undefined; 
  name: string | undefined;
  lastname: string | undefined;
  cpf: string | undefined;
  email: string | undefined;
  date: string | undefined;
  isZoomedImageModalOpen = false;

  constructor(
    private actionSheetController: ActionSheetController,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções de Imagem',
      buttons: [
        {
          text: 'Alterar Foto',
          handler: () => {
            this.selectNewProfilePicture(); 
          },
        },
        {
          text: 'Ver Imagem Ampliada',
          handler: () => {
            this.showZoomedImage(); 
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  selectNewProfilePicture(event?: any) {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput && event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.profilePicture = e.target.result; 
          console.log('Imagem de perfil carregada:', this.profilePicture); 
        };
        reader.readAsDataURL(file);
      }
    } else if (fileInput) {
      fileInput.click(); 
    }
  }

  showZoomedImage() {
    if (this.profilePicture) {
      this.isZoomedImageModalOpen = true; 
    }
  }

  closeZoomedImage() {
    this.isZoomedImageModalOpen = false; 
  }

  changeUserData() {
    console.log('Alterações salvas com sucesso!');
    console.log('Email:', this.email); 
    console.log('Nome:', this.name); 
  }

  formatCPF() {
    if (this.cpf) {
      this.cpf = this.cpf.replace(/\D/g, '');
      if (this.cpf.length > 11) {
        this.cpf = this.cpf.slice(0, 11);
      }
      this.cpf = this.cpf
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
  }

  formatDate() {
    if (this.date) {
      this.date = this.date.replace(/\D/g, '');
      if (this.date.length > 8) {
        this.date = this.date.slice(0, 8);
      }
      this.date = this.date
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d{4})$/, '$1/$2');
    }
  }

  loadUserProfile() {
    const user = this.authService.getUser();
    if (user) {
      this.name = user.displayName || '';
      this.email = user.email || '';
      this.profilePicture = user.photoURL || '';
    }
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Usuário deslogado com sucesso');
      this.router.navigate(['/login']); // Redireciona para a página de login
    }).catch(error => {
      console.error('Erro ao deslogar:', error);
    });
  }
}
