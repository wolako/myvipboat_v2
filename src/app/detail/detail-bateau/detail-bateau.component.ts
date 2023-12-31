import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BateauxService } from 'src/app/doc-services/bateaux.service';
import * as M from 'materialize-css';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-detail-bateau',
  templateUrl: './detail-bateau.component.html',
  styleUrls: ['./detail-bateau.component.scss']
})
export class DetailBateauComponent implements OnInit {

  imagesBateau: any = [];

  images=[
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },

  ]
  images2=[
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },

  ]
  images3=[
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },
  ]
  images4=[
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },
  ]
  images5=[
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b11.png', alt: 'image du bateau 11'
    },
  ]
  images6=[
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b13.png', alt: 'image du bateau 11'
    },
    {
      urlImg: '../assets/images/2.png', alt: 'image du bateau 2'
    },
    {
      urlImg: '../assets/images/b5.png', alt: 'image du bateau 5'
    },
    {
      urlImg: '../assets/images/b12.png', alt: 'image du bateau 12'
    },
    {
      urlImg: '../assets/images/b13.png', alt: 'image du bateau 11'
    },
  ]
  
  listBateaux!: any;
  bateau!: any;

  batForm!: FormGroup;

  constructor(
    private bateaux: BateauxService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder,
    private lightbox: Lightbox
  ) { }

  
  ngOnInit(): void {
    this.listBateaux = this.bateaux.getAllListBateaux();

    const bateauxId = +this.route.snapshot.params['id'];
      switch (bateauxId) {
        case 1:
          this.imagesBateau = this.images;
          break;
        case 2:
          this.imagesBateau = this.images2;
          break;
        case 3:
          this.imagesBateau = this.images3;
          break;
        case 4:
          this.imagesBateau = this.images4;
          break;
        case 5:
          this.imagesBateau = this.images5;
          break;
        case 6:
          this.imagesBateau = this.images6;
          break;
      
        default:
          break;
      }
      
    this.bateau = this.bateaux.getBateauxById(bateauxId);

    const elemnt = document.querySelectorAll('.parallax');
    const inst = M.Parallax.init(elemnt);
  
    const elemn = document.querySelectorAll('.materialboxed');
    const instance = M.Materialbox.init(elemn);

    this.batForm = this.formbuilder.group({
      nom : ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateDepart: ['', Validators.required],
      dateArrivee: ['', Validators.required],
      lieuDepart: ['', Validators.required],
      nbPerso: ['', Validators.required],
      comment: [''],
    });
  } 

  onSubmit() {
    console.log(this.batForm.value);
  }  
  
  goBack(){
    this.router.navigate(['/bateaux']);
  }
}
