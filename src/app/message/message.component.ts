import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @Input('InnerMessage') message: string;
  @Output('outerMessage') outputEvent = new EventEmitter<string>();

  onClick() {
    this.outputEvent.emit("Thank you");
  }
}
