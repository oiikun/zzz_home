import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  jogos = [
    { nome: 'ZZZ', rota: '/zzz', ativo: true },
    { nome: 'HSR', rota: '/hsr', ativo: false },
    { nome: 'Genshin', rota: '/genshin', ativo: false },
  ];

  constructor(private router: Router) {}

  navegar(rota: string, ativo: boolean) {
    if (ativo) this.router.navigate([rota]);
  }
}