import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isAvailable=true;
  title = 1234;
  title1 = {color:'red'}
  courses=["Python","Angular","Testing","Java","Devops"];
  countries=["India","China","Italy","Europe","Russia"];
  laptops=["Dell","Lenovo","Acer","Apple","Asus"];
  display(){
    this.isAvailable=false;
    alert("Successfully selected...!")
  }
  dis(val1:any,val2:any){
    console.log(val1);
    console.log(val2);
    
  }
}
