import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { AuthService } from 'src/Services/GraphQueryServices/auth.service';
import { DataService } from 'src/Services/GraphQueryServices/data.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/DocumentObjectModel/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnChanges, OnInit, OnDestroy {

  @Input() data: string | undefined;
  @Input() registerForm: FormGroup | undefined;
  submitted = false;
  user!: User;

  constructor(private authSr: AuthService, private dataSr: DataService, private fb: FormBuilder, private router: Router) { }

  ngOnChanges() {

  }

  ngOnInit():void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.registerForm?.clearAsyncValidators();
  }

  buildForm(){
    this.registerForm = this.fb.group({
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      email: [this.user.email, Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')],
      phonenumber: [this.user.phone_number, Validators.required, Validators.maxLength(13), Validators.minLength(13)],
      password: [this.user.password, Validators.required, Validators.pattern('')]
    });
  }

  submit = () =>{
    this.submitted = true;
    if(this.registerForm?.valid){
      this.router.navigateByUrl('');
    }
  }

}
