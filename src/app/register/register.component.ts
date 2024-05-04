import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

function noSpaceValidator(control: any) {
  if (control.value && control.value.indexOf(' ') >= 0) {
    return { noSpace: true };
  }
  return null;
}

function confirmPasswordValitor(control: any) {
  console.log(control)
  return null;
}


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {

  userData : FormGroup;
  constructor(private fb: FormBuilder){
    this.userData = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")]],
      username: ['',[Validators.required, noSpaceValidator]],
      password:['',[Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/.,<>]).{8,}$/)]],
      rePassword: ['', Validators.required]
    })
  }



  handleRegisterForm(){
    if(this.userData.status != 'INVALID'){
      alert("Form submitted Successfully")
    }
  }
}
