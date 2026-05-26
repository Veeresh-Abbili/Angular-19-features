import { Component } from '@angular/core';
import { HydrationComponent } from './hydration/hydration.component';
import { LinkedSignalComponent } from "./linked-signal/linked-signal.component";
import { ResourceRxResourceComponent } from './resource-rx-resource/resource-rx-resource.component';
import { RouterOutlet } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, StandaloneComponent, CommonModule],
  imports: [ResourceRxResourceComponent],
  imports: [HydrationComponent, LinkedSignalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular19-features';

     isLogin:boolean = false;

     login(){

     this.isLogin = true;
     console.log("standalone components works")
    }










}
