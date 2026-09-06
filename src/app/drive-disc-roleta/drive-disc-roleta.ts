import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-drive-disc-roleta',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './drive-disc-roleta.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./drive-disc-roleta.css'],
})
export class DriveDiscRoletaComponent {
  @Input() build: any;

  selecionado: any = null;
  tipoSelecionado: string = '';

  discos = [
    { slot: 1, label: 'Disco 1', stat: 'PV' },
    { slot: 2, label: 'Disco 2', stat: 'ATQ' },
    { slot: 3, label: 'Disco 3', stat: 'DEF' },
    { slot: 4, label: 'Disco 4', stat: 'CRIT Rate / CRIT DMG' },
    { slot: 5, label: 'Disco 5', stat: 'Physical DMG Bonus' },
    { slot: 6, label: 'Disco 6', stat: 'HP% / CRIT Rate / CRIT DMG' },
  ];

  selecionarDisco(disco: any) {
    if (this.selecionado === disco && this.tipoSelecionado === 'disco') {
      this.selecionado = null;
      this.tipoSelecionado = '';
    } else {
      this.selecionado = disco;
      this.tipoSelecionado = 'disco';
    }
  }

  selecionarWEngine() {
    if (this.tipoSelecionado === 'wengine') {
      this.selecionado = null;
      this.tipoSelecionado = '';
    } else {
      this.selecionado = this.build;
      this.tipoSelecionado = 'wengine';
    }
  }
}
