import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { AuthService } from 'src/Services/GraphQueryServices/auth.service';
import { DataService } from 'src/Services/GraphQueryServices/data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/DocumentObjectModel/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnChanges, OnInit, OnDestroy {

  @Input() data: string | undefined;
  loginForm!: FormGroup;
  @Input() submitted = false;
  @Input() user! : User;

  constructor(private authSr: AuthService, private dataSr: DataService, private fb: FormBuilder, private router: Router) { }

  ngOnChanges() {

  }

  ngOnInit():void {

    this.buildForm();
  }

  ngOnDestroy() {
    
  }

  private buildForm(){

    this.loginForm = this.fb.group({
      firstname: [this.user.firstname, Validators.required],
      email: [this.user.email, Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')],
      password: [this.user.password, Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.loginForm?.valid && this.loginForm.dirty) {
      this.router.navigateByUrl('navigate to some page necessary');
    }
  }
}
