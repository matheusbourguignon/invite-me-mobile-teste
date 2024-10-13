import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa o Router
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map!: google.maps.Map;
  marker!: google.maps.Marker;

  // Coordenadas do convite
  invitationLocation = { lat: -22.909712393318834, lng: -43.52427131664251 };

  constructor(private mapsService: MapsService, private router: Router) {} // Injeta Router

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      this.map = new google.maps.Map(mapElement, {
        center: this.invitationLocation,
        zoom: 15,
      });

      this.addMarker(this.invitationLocation);

      // Adiciona um evento de clique ao mapa
      this.map.addListener('click', () => {
        this.goBack(); // Chama o método para voltar ao clicar no mapa
      });
    }
  }

  addMarker(location: { lat: number; lng: number }) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Local do Convite', // Título do marcador
    });
  }

  // Método para voltar à tab1
  goBack() {
    this.router.navigate(['/tabs/tab1']); // Navega para a tab1
  }

  // Exemplo de método para buscar geocodificação
  getGeocode(address: string) {
    this.mapsService.getGeocode(address).subscribe(response => {
      console.log('Geocodificação:', response);
    });
  }
}
