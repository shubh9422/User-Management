import { Component, OnInit } from '@angular/core';
import { Contacts } from './mock-contacts'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor() { }
  contacts = Contacts;
  ngOnInit(): void {
  }

}
