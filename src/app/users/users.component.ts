import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  name = "KG"
  roles = [
    {
      id: '1',
      role: 'Admin'
    },
    {
      id: '2',
      role: 'User'
    }
    ,
    {
      id: '3',
      role: 'Mid'
    }
    ,
    {
      id: '4',
      role: 'Basic'
    }
  ];

  defaultRoleId = '2'



  ngOnInit() {
  }

}
