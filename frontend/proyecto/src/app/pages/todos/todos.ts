import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Apijugadores } from '../../services/apijugadores';
import { JugadorList } from '../../Models/jugadores.models';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  url = 'http://localhost:3000/api/jugadores';

  jugadores = signal<JugadorList[]>([]);

  constructor(private api: Apijugadores) {
    this.getDatos();
  }

  getDatos() : void{
    console.log(this.url);
    this.api.getJugadores(this.url).subscribe((response) => {
      this.jugadores.set(response);
      console.log("Jugadores recibidos:", this.jugadores());
    });
  }

  mostrarModal = false;
  jugadorSeleccionado: any = null;

  abrirModal(jugador: any) {
    this.jugadorSeleccionado = jugador;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

}
