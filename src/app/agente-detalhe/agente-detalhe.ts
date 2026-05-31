import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import characters from '../agentes/ZZZ.json';
import { DriveDiscRoletaComponent } from '../drive-disc-roleta/drive-disc-roleta';

@Component({
  selector: 'app-agente-detalhe',
  standalone: true,
  imports: [CommonModule, NgClass, DriveDiscRoletaComponent],
  templateUrl: './agente-detalhe.html',
  styleUrls: ['./agente-detalhe.css']
})
export class AgenteDetalheComponent implements OnInit {
  agente: any = null;
  times: any[] = [];
  abaAtiva = 'Status';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.agente = (characters as any[]).find(c => c.id === id);

    if (this.agente?.times) {
      this.times = this.agente.times.map((tid: number) =>
        (characters as any[]).find(c => c.id === tid)
      ).filter(Boolean);
    }
  }

  trocarAba(aba: string) {
    this.abaAtiva = aba;
  }

  voltar() {
    this.router.navigate(['/']);
  }
}