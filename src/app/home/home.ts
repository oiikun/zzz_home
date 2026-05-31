import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import characters from '../agentes/ZZZ.json';
import { AgenteCardComponent } from '../agente-card/agente-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, AgenteCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  searchTerm = '';
  activeFilter = 'todos';

  allCharacters = characters;
  filteredCharacters = characters;

  onSearch() {
    this.applyFilters();
  }

  filterBy(tipo: string) {
    this.activeFilter = tipo;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredCharacters = this.allCharacters.filter(c => {
      const matchesSearch = c.nome.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesFilter = this.activeFilter === 'todos' || c.elemento === this.activeFilter;
      return matchesSearch && matchesFilter;
    });
  }
}