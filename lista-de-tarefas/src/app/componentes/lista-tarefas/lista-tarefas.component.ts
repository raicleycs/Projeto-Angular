import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tarefa } from '../../modelos/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Aprender Angular', concluida: true },
    { id: 2, titulo: 'Aprender TypeScript', concluida: true },
    { id: 3, titulo: 'Fazer esta atividade', concluida: false },
  ];

  novaTarefaTitulo: string = '';

  private proximoId: number = 4;

  adicionarTarefa(): void {

    if (this.novaTarefaTitulo.trim() === '') {
      return;
    }
    const novaTarefa: Tarefa = {
      id: this.proximoId,
      titulo: this.novaTarefaTitulo,
      concluida: false
    };
    this.tarefas.push(novaTarefa);
    this.proximoId++;
    this.novaTarefaTitulo = '';
  }
  alternarStatusTarefa(idDaTarefa: number): void {
    const tarefa = this.tarefas.find(t => t.id === idDaTarefa);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }
  removerTarefa(idDaTarefa: number): void {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== idDaTarefa);
  }
}