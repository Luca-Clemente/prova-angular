import { Injectable } from '@angular/core';
interface Subject {
  title: string;
}

@Injectable()
export class LucaDisciplinasService {
  list: Array<Subject> = [];
  constructor() { }

  getList() {
    return this.list;
  }
  add(title: string) {
    this.list.push({ title });
  }
  remove(index: number) {
    this.list.splice(index, 1);
  }
}