import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';



@NgModule({
  declarations: [
    PagingHeaderComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot() //forRoot - own providers array, needs to be injected into rootModule at startup, acting as a Singleton.
  ],
  exports: [
    PaginationModule
  ]
})
export class SharedModule { }
