import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobDashboardComponent } from "./job-dashboard.component";
import { JobDetailComponent } from "./job-detail.component";
import { JobCountComponent } from "./job-count.component";
import { JobDashboardService } from "./job-dashboard.service";

@NgModule({
  declarations: [JobDashboardComponent, JobDetailComponent, JobCountComponent],
  imports: [CommonModule],
  exports: [JobDashboardComponent],
  providers: [JobDashboardService]
})
export class JobDashboardModule {}
