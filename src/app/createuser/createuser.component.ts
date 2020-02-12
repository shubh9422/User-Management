import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl   } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from '../mock-contacts'

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.less']
})
export class CreateuserComponent implements OnInit {

  userControl: FormGroup;
  userContactDetails = Contacts;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userControl = this.formBuilder.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contact: ['', [Validators.required, phoneNumberValidator]],
        status: ['active', Validators.required],
    });
  }

  get f() { return this.userControl.controls; }

  onSubmit() {
    console.log("submit", this.userControl.value);
    this.userContactDetails.push(this.userControl.value);
    alert("user details added successfully");
    this.router.navigate(['/list']);
  }

}

export function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^\d+$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}
