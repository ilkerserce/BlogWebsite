import { Component, OnInit, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = new FormControl('Test');
  mail = new FormControl('');
  message = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
