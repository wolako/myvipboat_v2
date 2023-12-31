import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as M from 'materialize-css';
import { TemoignageService } from 'src/app/doc-services/temoignage.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit, AfterViewInit {

  temoignages!: any;
  contactForm!: FormGroup;

  constructor(
    private temoignage: TemoignageService,
    private formContact: FormBuilder
  ) { }

  ngOnInit(): void {
    this.temoignages = this.temoignage.getAllTemoignages();

    this.contactForm = this.formContact.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

  ngAfterViewInit(): void {

    const elemnt = document.querySelectorAll('.parallax');
    const inst = M.Parallax.init(elemnt);

    const elemt = document.querySelectorAll('.carousel');
    const options =  M.Carousel.init(elemt);
    
  }

}
