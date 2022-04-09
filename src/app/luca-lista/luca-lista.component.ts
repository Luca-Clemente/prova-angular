import { Component, OnInit } from '@angular/core';
import { listSubjects } from '../list';

@Component({
  selector: 'app-luca-lista',
  templateUrl: './luca-lista.component.html',
  styleUrls: ['./luca-lista.component.css'],
})
export class LucaListaComponent implements OnInit {
  list = listSubjects;

  constructor() {}

  ngOnInit() {}

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
