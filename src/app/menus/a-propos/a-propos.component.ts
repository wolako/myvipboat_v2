import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const elemnt = document.querySelectorAll('.parallax');
    const inst = M.Parallax.init(elemnt);

    const elemn = document.querySelectorAll('.materialboxed');
    const instance = M.Materialbox.init(elemn);
  }

}
