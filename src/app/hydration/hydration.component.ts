import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hydration',
  standalone:true,
  imports: [],
  templateUrl: './hydration.component.html',
  styleUrl: './hydration.component.css'
})
export class HydrationComponent implements OnInit{
  
   users =[{id:1,name:"John",age:30,gender:"male"},
           {id:2,name:"Jane",age:25,gender:"female"},
           {id:3,name:"Bob",age:35,gender:"male"},
           {id:4,name:"Alice",age:28,gender:"female"},
           {id:5,name:"Tom",age:40,gender:"male"}
          ]

 ngOnInit(): void {
   console.log("HydrationComponent initialized");
 }         
}
