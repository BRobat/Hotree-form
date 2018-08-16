import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BoardComponent } from './board/board.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormComponent,
    BoardComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: FormComponent},
      {path: "success", component: SuccessComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
