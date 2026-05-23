import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

sourceSignal = signal(0);
updateSignal = linkedSignal({
  source: this.sourceSignal,
  computation:()=>this.sourceSignal()*5
});

updateSourceSignal(){
  this.sourceSignal.set(2);
  this.updateSignal.set(10);
}

}
