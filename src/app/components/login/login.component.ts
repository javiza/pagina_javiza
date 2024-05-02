import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCard, IonInput, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonInput, FormsModule, IonCard, IonText, ReactiveFormsModule]
})
export class LoginComponent 
 implements OnInit {

  constructor() { }

  ngOnInit(): void {}
    loginForm = new FormGroup({
      nombre: new FormControl('Nombre', [Validators.required]),
      password: new FormControl('mayor a 4 caracteres', [Validators.required,
        Validators.minLength(4)])
    })
    get nombre() { return this.loginForm.get('nombre')}
    get password() { return this.loginForm.get('password')}
}
