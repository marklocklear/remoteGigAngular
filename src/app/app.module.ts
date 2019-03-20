import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobDashboardModule } from "./job-dashboard/job-dashboard.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, JobDashboardModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
