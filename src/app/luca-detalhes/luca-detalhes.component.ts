import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listSubjects } from '../list';

@Component({
  selector: 'app-luca-detalhes',
  templateUrl: './luca-detalhes.component.html',
  styleUrls: ['./luca-detalhes.component.css']
})
export class LucaDetalhesComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = listSubjects[params.get('index')];
    });
  }

}