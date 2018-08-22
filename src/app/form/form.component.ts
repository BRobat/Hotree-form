import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  desCharCount = 0;
  employes = ["elo", "hey"];
  loggedInUserId = 3
  show: boolean = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddEvent(form: NgForm) {
    const formOutput = form.value
    console.log(form.value);




    this.router.navigate(["success"])
  }

}
