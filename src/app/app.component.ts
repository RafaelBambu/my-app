import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onEdit(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
