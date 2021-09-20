import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private elementRef: ElementRef,

    private router: Router) {




    this.formulario = new FormGroup({

      nombre: new FormControl('', [
        Validators.required
      ]),

      apellidos: new FormControl('', [

        Validators.required
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)
      ]),

      telefono: new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)

        ]),
      direccion: new FormControl('', [
        Validators.required


      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/)
      ]),

      password_2: new FormControl(),





    }, [this.passwordValidator])
  }

  public ngOnInit() {

  }


  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('password_2').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else { return { passwordValidator: true } }

  }
  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;



  }


}


