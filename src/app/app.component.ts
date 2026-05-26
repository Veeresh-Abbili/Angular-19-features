import { Component } from '@angular/core';
import { HydrationComponent } from './hydration/hydration.component';
import { LinkedSignalComponent } from "./linked-signal/linked-signal.component";
import { ResourceRxResourceComponent } from './resource-rx-resource/resource-rx-resource.component';

@Component({
  selector: 'app-root',
  standalone:true,
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
    }










}
