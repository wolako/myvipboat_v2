import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { ServicesService } from 'src/app/doc-services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  listServices!: any;

  constructor(
    private noservices : ServicesService,
  ) { }

  ngOnInit(){
    this.listServices = this.noservices.getAllListServices();
    
    const elemnt = document.querySelectorAll('.parallax');
    const inst = M.Parallax.init(elemnt);
    
    const elemn = document.querySelectorAll('.materialboxed');
    const insta = M.Materialbox.init(elemn);
    
  }

}
