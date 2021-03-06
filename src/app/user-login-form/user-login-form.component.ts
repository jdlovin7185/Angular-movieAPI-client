import { Component, OnInit, Input } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { UserLoginService } from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
  
  @Input() userData = { Username: '', Password: '' };
  
  constructor(
    public fetchApiData: UserLoginService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router) { }
    
    ngOnInit(): void {
    }  
    
    /**
     * Lets an existing user login
     */
    loginUser(): void {
      this.fetchApiData.userLogin(this.userData).subscribe((result) => {
        // Logic for a successful user login goes here
        this.dialogRef.close();
        localStorage.setItem('user', result.user.Username);
        localStorage.setItem('token', result.token)
        console.log(result);
        this.snackBar.open(result, 'OK', {
          duration: 2000
        });
        this.router.navigate(['movies']);
      }, (result) => {
        console.log(result);
        this.snackBar.open(result, 'OK', {
          duration: 2000
        });
      });
    }
    
}
