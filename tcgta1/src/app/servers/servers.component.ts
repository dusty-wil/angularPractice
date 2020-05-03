import { Component, OnInit } from '@angular/core';

@Component({
  // selector can be any CSS selector IE
  // <div app-servers></div>
  // selector: '[app-servers]'
  // selecting by class works, id does not
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: ``, components have to have either templateUrl or template
  // use back-tics ` ` to do multi-line HTML
  styleUrls: ['./servers.component.css'],
  // alternative
  // styles: [
  //   `h3 { 
  //     color: dodgerBlue;
  //   }`
  // ]
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'Server not created';

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

}


