import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot() //forRoot - own providers array, needs to be injected into rootModule at startup, acting as a Singleton.
  ],
  exports: [
    PaginationModule
  ]
})
export class SharedModule { }
