import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'exer002-contador';
  numero : number = 0;

  acrescenta(): void {
    this.numero++
  }

  decrementa(): void{
    if(this.numero > 0){      
      this.numero--
    }
  }
}
