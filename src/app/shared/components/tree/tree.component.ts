import {Component, Input, OnInit} from '@angular/core';
import {Aplication} from '../../../data/interfaces/iNavigation';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() navigationAplicacion: Aplication[];
  constructor() { }

  ngOnInit(): void {
  }

}
