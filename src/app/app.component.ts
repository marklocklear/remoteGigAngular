import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  template: `
    <div>
      <job-dashboard></job-dashboard>
    </div>
  `
})
export class AppComponent {}
