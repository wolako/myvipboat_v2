import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie-img-bateau',
  templateUrl: './galerie-img-bateau.component.html',
  styleUrls: ['./galerie-img-bateau.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms', style({opacity: 0.8}))
      ])
    ])
  ]
})
export class GalerieImgBateauComponent {
open(_t13: number) {
throw new Error('Method not implemented.');
}

  @Input() image: any = [];
  @Input() showCount = false;
  private _album: Array<{ src: string, caption: string, thumb: string }> = [];

  previewImage = false;
  showMask = false;
  curentLightboxImage: any = this.image[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() {}

  ngOnInit(): void {
    this.totalImageCount = this.image.length;
  }

  onPreviewImage(index: number): void{
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.curentLightboxImage = this.image[index];
  }

  onAnimationEnd(event: AnimationEvent){
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview(){
    this.previewImage = false;
  }

  prev(): void{
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex > this.image.length - 1) {
      this.currentIndex = 0;
    }
    this.curentLightboxImage = this.image[this.currentIndex];
  }
  
  next(){
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    this.curentLightboxImage = this.image[this.currentIndex];
  }
}
