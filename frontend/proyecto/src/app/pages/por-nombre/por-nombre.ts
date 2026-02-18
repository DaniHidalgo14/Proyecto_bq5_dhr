import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Apijugadores } from '../../services/apijugadores';
import { JugadorList } from '../../Models/jugadores.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-por-nombre',
  imports: [CommonModule, FormsModule],
  templateUrl: './por-nombre.html',
  styleUrl: './por-nombre.css',
})
export class PorNombre {
  url = '';
  nombre:string = '';

  jugadores = signal<JugadorList[]>([]);

  constructor(private api: Apijugadores) {
    this.getDatos();
  }

  getDatos() : void{
    this.url = 'http://localhost:3000/api/jugadores/nombre/' + this.nombre;

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
