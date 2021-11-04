import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //attributes firts, then constructor, rest...

  
  title = 'SkiNet';

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
