import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agente-card',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './agente-card.html',
  styleUrls: ['./agente-card.css']
})
export class AgenteCardComponent {
  @Input() agente: any;

  constructor(private router: Router) {}

  irParaDetalhe() {
    this.router.navigate(['/agente', this.agente.id]);
  }
}