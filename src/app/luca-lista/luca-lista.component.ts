import { Component, OnInit } from '@angular/core';
import { listSubjects } from '../list';
import { LucaDisciplinasService } from '../luca-disciplinas.service';

@Component({
  selector: 'app-luca-lista',
  templateUrl: './luca-lista.component.html',
  styleUrls: ['./luca-lista.component.css'],
})
export class LucaListaComponent implements OnInit {
  list = listSubjects;

  newSubject: any;

  constructor(public subjects: LucaDisciplinasService) {}

  ngOnInit() {}

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
