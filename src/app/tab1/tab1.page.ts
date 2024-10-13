import { Component } from '@angular/core';
import { calendar } from 'ionicons/icons'; // Importar o ícone
import { Router } from '@angular/router'; // Importar o Router para navegação

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  invites = [
    { title: 'Convite 1', date: '15-10-2024', time: '18:00', description: 'Descrição do Convite 1' }
    // Adicione mais convites conforme necessário
  ];

  selectedInvite: any; // Variável para armazenar o convite selecionado
  calendar = calendar; // Defina a variável do ícone aqui

  constructor(private router: Router) {} // Injetar o Router no construtor

  selectInvite(invite: any) {
    // Se o mesmo convite for clicado, desmarque-o
    if (this.selectedInvite === invite) {
      this.selectedInvite = null;
    } else {
      this.selectedInvite = invite; // Define o convite selecionado
    }
  }

  goToMaps() {
    this.router.navigate(['/maps']); // Navegar para a página de mapas
  }
}
