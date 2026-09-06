import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hub.html',
  styleUrls: ['./hub.css']
})
export class HubComponent {
  abaAtiva = 'oficial';

  abas = ['Oficial', 'Discussões', 'Guias', 'Artes de Fãs'];

  jogos = [
    { nome: 'Zenless Zone Zero', rota: '/zzz', imagem: 'agentes/ellen.webp', ativo: true },
    { nome: 'Honkai: Star Rail', rota: '/hsr', imagem: '', ativo: false },
    { nome: 'Genshin Impact', rota: '/genshin', imagem: '', ativo: false },
    { nome: 'Honkai Impact 3rd', rota: '/hi3', imagem: '', ativo: false },
  ];

  posts = [
    {
      autor: 'Admin',
      tempo: '1h atrás',
      titulo: '🎉 Novo agente Billy Estelar disponível!',
      descricao: 'O novo agente físico do tipo Ruptura já está disponível no banner. Confira a build completa no hub!',
      tags: ['#BillyEstelar', '#ZZZ'],
      visualizacoes: '12 mil',
      comentarios: 145,
      curtidas: 980
    },
    {
      autor: 'ZZZ_Player',
      tempo: '3h atrás',
      titulo: '📋 Guia completo de times para o patch atual',
      descricao: 'Separei os melhores times para cada tipo de conteúdo do patch 2.0. Confira!',
      tags: ['#Guia', '#Times'],
      visualizacoes: '8 mil',
      comentarios: 89,
      curtidas: 654
    },
    {
      autor: 'GachaNews',
      tempo: '5h atrás',
      titulo: '🔔 Códigos de resgate ZZZ válidos hoje',
      descricao: 'Novos códigos disponíveis: ZZZ2025, ZZZFREE, GACHAHUB — resgate agora!',
      tags: ['#Códigos', '#Grátis'],
      visualizacoes: '45 mil',
      comentarios: 312,
      curtidas: 2100
    }
  ];

  trending = [
    { tag: '#BillyEstelar', posts: '1.226', membros: '10 mil' },
    { tag: '#Norma', posts: '479', membros: '4.865' },
    { tag: '#Promeia', posts: '380', membros: '3.2 mil' },
    { tag: '#Miyabi', posts: '654', membros: '8 mil' },
  ];

  constructor(private router: Router) {}

  irParaBuilds(jogo: any) {
    if (jogo.ativo) this.router.navigate([jogo.rota]);
  }
}