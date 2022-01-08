import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sakib-frontend';
  users:any;
  constructor(private usersData:UsersDataService){
    this.usersData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data;
    })
  }
}
