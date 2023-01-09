import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  messages: string[] = ['Hello world', 'Have a nice day', 'Nice to see you'];
}
