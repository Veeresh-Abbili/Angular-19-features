import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

// sourceSignal = signal(0);
// updateSignal = linkedSignal({
//   source: this.sourceSignal,
//   computation:()=>this.sourceSignal()*5
// });

// updateSourceSignal(){
//   this.sourceSignal.set(2);
//   this.updateSignal.set(10);
// }

 //  currentEmail = signal({id:1,name:"FED"});
  //  alternateEmail = computed(()=>`${this.currentEmail().name}@gmail.com`);

  //  alternateEmailId(){
  //    this.currentEmail.set({id:2,name:"FEDLearing"});
  //  }


  // currentEmail = signal({id:1,name:"FED"});
  //  alternateEmail = linkedSignal(()=>`${this.currentEmail().name}@gmail.com`);

  //  alternateEmailId(){
  //    this.currentEmail.set({id:2,name:"FEDLearing"});
  //  }

   currentEmail = signal({id:1,name:"FED"});
   alternateEmail = linkedSignal({
    source:this.currentEmail,
    computation:()=>`${this.currentEmail().name}@gmail.com`,
    equal:(a:any,b:any ) => a.id !== b.id 
   });

   alternateEmailId(){
     this.currentEmail.set({id:2,name:"FEDLearing"});
   }

}
