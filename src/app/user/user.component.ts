import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../mock-contacts'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }
  userContacts = Contacts;
  ngOnInit(): void {
  }

  deleteRecords(i) {
    this.userContacts.splice(i,1);
    alert("Record deleted successfully");
  }

  editRecords(i) {
    this.router.navigate(['/edit', i+1]);
  }

  inactiveRecords(i) {
    this.userContacts[i].status = "Inactive";
    alert("Record inactivated");
  }

  activeRecords(i) {
    this.userContacts[i].status = "Active";
    alert("Record activated");
  }

}
