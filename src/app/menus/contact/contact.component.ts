import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  selectedName!: string;

  onNameSelected(name: string) {
    this.selectedName = name;
  }

  ngOnInit(): void {
    
  }


}
