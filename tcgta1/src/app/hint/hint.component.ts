import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  showHint: boolean = false;
  hintRequests = [];

  constructor() { }

  ngOnInit() {
  }

  toggleHint(event) {
    this.showHint = !this.showHint;
    if (this.showHint) {
      this.hintRequests.push(Date.now());
    }
    
  }
}
