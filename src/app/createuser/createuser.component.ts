import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl   } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Contacts } from '../mock-contacts'

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.less']
})
export class CreateuserComponent implements OnInit {

  userControl: FormGroup;
  userContactDetails = Contacts;
  slectedIndex;
  submitBtnText: String = "Submit";
  constructor(private formBuilder: FormBuilder, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
    this.userControl = this.formBuilder.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(emailPattern)]],
        contact: ['', [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]],
        status: ['Active', Validators.required],
    });
    this.slectedIndex = 0;
    
    if (this.activeRouter.snapshot.params['id']) {
      this.submitBtnText = "Update";
      this.slectedIndex = parseInt(this.activeRouter.snapshot.params['id'], 10);
      let userRowData = this.userContactDetails[this.slectedIndex - 1];
      this.userControl.patchValue({
        fname: userRowData.fname,
        lname: userRowData.lname,
        email: userRowData.email,
        contact: userRowData.contact,
        status: userRowData.status
      })
    }
  }

  get f() { return this.userControl.controls; }

  onSubmit() {
    console.log("submit", this.userControl.value);
    if (!this.slectedIndex) {
      this.userContactDetails.push(this.userControl.value);
      alert("user details added successfully");
    } else {
      this.userContactDetails[this.slectedIndex - 1] = this.userControl.value;
      alert("user details updated successfully");
    }
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
