import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobDashbardModule } from "./job-dashboard/job-dashboard.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, JobDashbardModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
