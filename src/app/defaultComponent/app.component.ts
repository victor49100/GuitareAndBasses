import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GuitareAndBasses';

  isCheckboxChecked = false;
  disableCheckbox() {
    this.isCheckboxChecked = false;
  }
}
