import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobDashboardComponent } from "./job-dashboard.component";
import { JobDetailComponent } from "./job-detail.component";
import { JobCountComponent } from "./job-count.component";

@NgModule({
  declarations: [JobDashboardComponent, JobDetailComponent, JobCountComponent],
  imports: [CommonModule],
  exports: [JobDashboardComponent]
})
export class JobDashbardModule {}
