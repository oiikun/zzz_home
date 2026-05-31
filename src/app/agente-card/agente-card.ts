import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agente-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agente-card.html',
  styleUrls: ['./agente-card.css']
})
export class AgenteCardComponent {
  @Input() agente: any;
}