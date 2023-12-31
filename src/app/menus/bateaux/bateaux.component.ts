import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BateauxService } from 'src/app/doc-services/bateaux.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.component.html',
  styleUrls: ['./bateaux.component.scss']
})
export class BateauxComponent implements OnInit, AfterViewInit{
  
  listBateaux!: any;
  bateau!: any;

  constructor(
    private bateaux: BateauxService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.listBateaux = this.bateaux.getAllListBateaux();
  }

  ngAfterViewInit(): void {
    const elemnt = document.querySelectorAll('.parallax');
    const inst = M.Parallax.init(elemnt);

    const elemn = document.querySelectorAll('.materialboxed');
    const instance = M.Materialbox.init(elemn);

    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems);

    const elemts = document.querySelectorAll('select');
    const instan = M.FormSelect.init(elemts);

    const ac = document.querySelectorAll('.autocomplete');
    const ist = M.Autocomplete.init(ac, {
      data:{
        "mega yacth": null,
        "yacth": null,
        "peniche": null,
        "bateau à voile": null,
      }
    })
  }

  onBateaux( bateau: any) {
    this.router.navigate(['/bateaux', bateau.id]);
  }


  // onSubmit() {
  //   console.log(this.rechercheBatForm.value);
  // }

}
