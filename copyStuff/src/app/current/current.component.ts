import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  constructor(private http: HttpClient) { }

  drives: any[] = [];

  ngOnInit() {
    this.getDriveInfo();
  }

  getDriveInfo() {
    this.http.get('http://localhost:3000/drivesstatus').subscribe((data: any[]) => {
      this.drives = data;
    });
  }
}
