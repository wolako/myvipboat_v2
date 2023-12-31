import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EvenementsService } from 'src/app/doc-services/evenements.service';
import * as M from 'materialize-css';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TemoignageService } from 'src/app/doc-services/temoignage.service';


@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit, AfterViewInit {

  listEvents!: any;
  eventReserveForm!: FormGroup;
  // testiForm!: FormGroup;
  
  constructor(
    private event : EvenementsService,
    private eventForm: FormBuilder,
    // private testifo: FormBuilder,
    private router: Router,
    private temoignage: TemoignageService
  ) {}
  
  ngOnInit(): void {

    this.listEvents = this.event.getAllListEvents();

    this.eventReserveForm = this.eventForm.group({
      name: ['', Validators.required],
      // firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventType: ['', Validators.required],
      numInvite: ['', Validators.required],
    });

    // this.testiForm = this.testifo.group({
    //   nom: ['', Validators.required],
    //   titre: ['', Validators.required],
    //   textarera: ['', Validators.required],
    // });

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
  }

  onSubmit() {
    console.log(this.eventReserveForm.value);
    // Envoyer les données soumises à un service ou API pour traitement ultérieur
  }

  // tesiForm
  
  // testiSubmit(){
  //   // this.temoignage.addTemoignages(this.testiForm.value);
  //   // this.router.navigateByUrl('/acceuil');
  //   console.log(this.testiForm.value);  
  // }

}
