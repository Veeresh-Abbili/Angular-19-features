import { HttpClient } from '@angular/common/http';
import { Component, OnInit,resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { promises } from 'dns';

@Component({
  selector: 'app-resource-rx-resource',
  imports: [],
  templateUrl: './resource-rx-resource.component.html',
  styleUrl: './resource-rx-resource.component.css'
})
export class ResourceRxResourceComponent implements OnInit {

  constructor(private http:HttpClient){}

  // userData:any[]=[];
  // rxResourceData:any[]=[];

  Url="https://jsonplaceholder.typicode.com/users"

ngOnInit(): void {
//  this.getData();
}


  // getData(){
  //    return this.http.get<any>(this.Url).subscribe((res:any)=>{
  //        this.userData = res;
  //   })
  // }

    // rxResource API:

    //  rxResourceData = rxResource({
    //     loader: ()=> this.http.get<any>(this.Url)
    //  }
    //  )

    //  resource API:

      resource = resource({
        loader:() => fetch(this.Url).then(res=>res.json() as Promise<any>)
      })

}
